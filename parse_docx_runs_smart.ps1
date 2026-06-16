Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxPath = "c:\Users\Admin\Desktop\Web\drive-download-20260616T045835Z-3-001\Cau_hoi_trac_nghiem_HTML.docx"
$tempDir = Join-Path $env:TEMP ([Guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $tempDir | Out-Null

try {
    [System.IO.Compression.ZipFile]::ExtractToDirectory($docxPath, $tempDir)
    $xmlPath = Join-Path $tempDir "word/document.xml"
    if (-not (Test-Path $xmlPath)) {
        Write-Error "word/document.xml not found!"
        exit 1
    }
    
    $xml = [xml](Get-Content $xmlPath -Raw -Encoding utf8)
    $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
    $ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
    
    $paragraphs = $xml.SelectNodes("//w:p", $ns)
    
    $rawParagraphs = @()
    $currentDe = "Unknown"
    
    # First pass: parse runs for all non-empty paragraphs and identify Headers
    for ($i = 0; $i -lt $paragraphs.Count; $i++) {
        $p = $paragraphs[$i]
        
        # Extract runs
        $runs = @()
        $pText = ""
        $pRuns = $p.SelectNodes(".//w:r", $ns)
        foreach ($r in $pRuns) {
            $t = $r.SelectSingleNode("w:t", $ns)
            if ($t) {
                $text = $t.InnerText
                $pText += $text
                $isBold = $r.SelectSingleNode("w:rPr/w:b", $ns) -ne $null
                $isUnderline = $r.SelectSingleNode("w:rPr/w:u", $ns) -ne $null
                $colorNode = $r.SelectSingleNode("w:rPr/w:color", $ns)
                $color = if ($colorNode) { $colorNode.GetAttribute("w:val") } else { "" }
                $highlightNode = $r.SelectSingleNode("w:rPr/w:highlight", $ns)
                $highlight = if ($highlightNode) { $highlightNode.GetAttribute("w:val") } else { "" }
                
                $runs += @{
                    Text = $text
                    Bold = $isBold
                    Underline = $isUnderline
                    Color = $color
                    Highlight = $highlight
                }
            }
        }
        
        $pText = $pText.Trim()
        if ($pText -eq "") { continue }
        
        # Check for De Header
        $hasDeColor = $false
        foreach ($run in $runs) {
            if ($run.Color -ieq "00B050") { $hasDeColor = $true }
        }
        
        $isDeHeader = $false
        if ($hasDeColor -or $pText -match '[Dd].{1,2}[Ee]\s*[1-4]') {
            $isDeHeader = $true
            if ($pText -match '[Dd].{1,2}[Ee]\s*1' -or $pText -match '1\s*:') { $currentDe = "Đề 1" }
            elseif ($pText -match '[Dd].{1,2}[Ee]\s*2' -or $pText -match '2\s*:') { $currentDe = "Đề 2" }
            elseif ($pText -match '[Dd].{1,2}[Ee]\s*3' -or $pText -match '3\s*:') { $currentDe = "Đề 3" }
            elseif ($pText -match '[Dd].{1,2}[Ee]\s*4' -or $pText -match '4\s*:') { $currentDe = "Đề 4" }
        }
        
        # Specific fix for Question 1 of De 4 missing option letter
        if ($currentDe -eq "Đề 4" -and $pText -eq "font-size") {
            $pText = "a. font-size"
            if ($runs.Count -gt 0) {
                $runs[0].Text = "a. " + $runs[0].Text
            }
        }
        
        $rawParagraphs += [PSCustomObject]@{
            De = $currentDe
            Text = $pText
            Runs = $runs
            Index = $i
            IsHeader = $isDeHeader
        }
    }
    
    # Second pass: group paragraphs into Question Blocks using Headers and Q patterns
    $questionBlocks = @()
    $currentBlock = @()
    $nextIsFirstQuestion = $false
    
    for ($j = 0; $j -lt $rawParagraphs.Count; $j++) {
        $p = $rawParagraphs[$j]
        
        if ($p.IsHeader) {
            # De Header boundary
            if ($currentBlock.Count -gt 0) {
                $questionBlocks += ,$currentBlock
                $currentBlock = @()
            }
            $nextIsFirstQuestion = $true
            continue
        }
        
        $pText = $p.Text
        $isQStart = $false
        
        if ($nextIsFirstQuestion) {
            $isQStart = $true
            $nextIsFirstQuestion = $false
        } elseif ($pText -match '^\d+\.\s*' -or $pText -match '^[Cc]\S*\s+[Hh]\S*\s+\d+') {
            $isQStart = $true
        }
        
        if ($isQStart -and $currentBlock.Count -gt 0) {
            $questionBlocks += ,$currentBlock
            $currentBlock = @()
        }
        
        $currentBlock += $p
    }
    if ($currentBlock.Count -gt 0) {
        $questionBlocks += ,$currentBlock
    }
    
    # Third pass: Parse each Question Block
    $parsedQuestions = @()
    
    # Helper to parse inline options from runs
    function Parse-InlineOptions($runs) {
        $options = @()
        $currentLetter = $null
        $optTexts = @{ "A"=""; "B"=""; "C"=""; "D"=""; "E"="" }
        $optCorrect = @{ "A"=$false; "B"=$false; "C"=$false; "D"=$false; "E"=$false }
        
        foreach ($run in $runs) {
            $rText = $run.Text
            if ($rText -match '^\s*([a-e])\.\s*(.*)$' -or $rText -match '^\s*([a-e])\)(.*)$') {
                $currentLetter = $Matches[1].ToUpper()
                $rText = $Matches[2]
            }
            
            if ($currentLetter -ne $null) {
                $optTexts[$currentLetter] += $rText
                $highlight = $run.Highlight.Trim().ToLower()
                $color = $run.Color.Trim().ToUpper()
                
                if ($highlight -in @('yellow', 'green', 'lightgreen')) {
                    $optCorrect[$currentLetter] = $true
                }
                if ($color -in @('FF0000', '00B050', 'RED', 'GREEN')) {
                    $optCorrect[$currentLetter] = $true
                }
            }
        }
        
        foreach ($let in @("A", "B", "C", "D", "E")) {
            $val = $optTexts[$let].Trim()
            if ($val -ne "") {
                $options += [PSCustomObject]@{
                    Letter = $let
                    Text = $val
                    Correct = $optCorrect[$let]
                }
            }
        }
        return $options
    }
    
    foreach ($block in $questionBlocks) {
        if ($block.Count -eq 0) { continue }
        
        $firstP = $block[0]
        $de = $firstP.De
        if ($de -eq "Unknown") { continue } # Skip document title block
        
        $qObj = [PSCustomObject]@{
            De = $de
            Q = ""
            Options = @()
        }
        
        # Check if first paragraph contains inline options
        $optCount = 0
        foreach ($run in $firstP.Runs) {
            if ($run.Text -match '^\s*[a-e]\.\s*' -or $run.Text -match '^[a-e]\)') {
                $optCount++
            }
        }
        
        $isInlineFirst = $false
        if ($optCount -ge 2 -or ($firstP.Text -match 'a\..*b\..*c\..*')) {
            $isInlineFirst = $true
        }
        
        if ($isInlineFirst) {
            # Extract question text before the first option
            $qPart = $firstP.Text
            $firstOptPos = $firstP.Text.IndexOf(" a.")
            if ($firstOptPos -lt 0) { $firstOptPos = $firstP.Text.IndexOf("a.") }
            if ($firstOptPos -ge 0) {
                $qPart = $firstP.Text.Substring(0, $firstOptPos).Trim()
            }
            $qObj.Q = $qPart -replace '^\d+\.\s*', '' -replace '^[Cc]\S*\s+[Hh]\S*\s+\d+:\s*', ''
            
            # Parse inline options from first paragraph runs
            $qObj.Options = Parse-InlineOptions $firstP.Runs
            
            # If there are subsequent paragraphs in the block, they must be additional options (like option E)
            for ($k = 1; $k -lt $block.Count; $k++) {
                $subP = $block[$k]
                if ($subP.Text -match '^([a-e])\.\s*(.*)$' -or $subP.Text -match '^([a-e])\)(.*)$') {
                    $let = $Matches[1].ToUpper()
                    $val = $Matches[2].Trim()
                    
                    $isCorrect = $false
                    foreach ($run in $subP.Runs) {
                        $highlight = $run.Highlight.Trim().ToLower()
                        $color = $run.Color.Trim().ToUpper()
                        if ($highlight -in @('yellow', 'green', 'lightgreen') -or $color -in @('FF0000', '00B050', 'RED', 'GREEN')) {
                            $isCorrect = $true
                        }
                    }
                    
                    $qObj.Options += [PSCustomObject]@{
                        Letter = $let
                        Text = $val
                        Correct = $isCorrect
                    }
                }
            }
        } else {
            # Multiline question. We need to find the option start index.
            $optStartIndex = $block.Count
            
            # 1. Search for explicit "a." or "a)" paragraph
            for ($k = 1; $k -lt $block.Count; $k++) {
                if ($block[$k].Text -match '^\s*a\.\s*' -or $block[$k].Text -match '^\s*a\)') {
                    $optStartIndex = $k
                    break
                }
            }
            
            # 2. If not found, check if last paragraph starts with d. or e.
            if ($optStartIndex -eq $block.Count) {
                $lastText = $block[-1].Text
                if ($lastText -match '^\s*d\.\s*' -or $lastText -match '^\s*d\)') {
                    $optStartIndex = $block.Count - 4
                } elseif ($lastText -match '^\s*e\.\s*' -or $lastText -match '^\s*e\)') {
                    $optStartIndex = $block.Count - 5
                }
            }
            
            # 3. Default fallback if still not found
            if ($optStartIndex -lt 1 -or $optStartIndex -ge $block.Count) {
                if ($block.Count -ge 5) {
                    $optStartIndex = $block.Count - 4
                } else {
                    $optStartIndex = 1
                }
            }
            
            # Extract question text from paragraphs up to optStartIndex
            $qParts = @()
            for ($k = 0; $k -lt $optStartIndex; $k++) {
                $qParts += $block[$k].Text
            }
            $qText = $qParts -join "`n"
            
            # Check if option A was inline in the question text (e.g. "...? a. display: block;")
            $lastQPara = $block[$optStartIndex - 1].Text
            if ($lastQPara -match '\s+a\.\s+(.*)$') {
                $firstOptPos = $lastQPara.IndexOf(" a.")
                if ($firstOptPos -lt 0) { $firstOptPos = $lastQPara.IndexOf("a.") }
                
                $qParts[$optStartIndex - 1] = $lastQPara.Substring(0, $firstOptPos).Trim()
                $qText = $qParts -join "`n"
                
                $optAText = $Matches[1].Trim()
                $isCorrectA = $false
                $totalLen = 0
                foreach ($run in $block[$optStartIndex - 1].Runs) {
                    $totalLen += $run.Text.Length
                    if ($totalLen -gt $firstOptPos) {
                        $highlight = $run.Highlight.Trim().ToLower()
                        $color = $run.Color.Trim().ToUpper()
                        if ($highlight -in @('yellow', 'green', 'lightgreen') -or $color -in @('FF0000', '00B050', 'RED', 'GREEN')) {
                            $isCorrectA = $true
                        }
                    }
                }
                
                $qObj.Options += [PSCustomObject]@{
                    Letter = "A"
                    Text = $optAText
                    Correct = $isCorrectA
                }
            }
            
            $qObj.Q = $qText -replace '^\d+\.\s*', '' -replace '^[Cc]\S*\s+[Hh]\S*\s+\d+:\s*', '' -replace '^[Cc]âu hỏi\s*\d+:\s*', ''
            
            # Parse subsequent option paragraphs
            $letArray = @("A", "B", "C", "D", "E")
            $letIndex = if ($qObj.Options.Count -eq 1) { 1 } else { 0 }
            
            for ($k = $optStartIndex; $k -lt $block.Count; $k++) {
                $subP = $block[$k]
                $subText = $subP.Text
                
                # Check if it has multiple options inline in this option paragraph
                if ($subText -match '^[a-e]\..*[a-e]\.') {
                    $inlineOpts = Parse-InlineOptions $subP.Runs
                    foreach ($io in $inlineOpts) {
                        $qObj.Options += $io
                    }
                    continue
                }
                
                $let = $letArray[$letIndex]
                $val = $subText
                
                if ($subText -match '^([a-e])\.\s*(.*)$' -or $subText -match '^([a-e])\)(.*)$') {
                    $let = $Matches[1].ToUpper()
                    $val = $Matches[2].Trim()
                }
                
                # Correctness check
                $isCorrect = $false
                foreach ($run in $subP.Runs) {
                    $highlight = $run.Highlight.Trim().ToLower()
                    $color = $run.Color.Trim().ToUpper()
                    if ($highlight -in @('yellow', 'green', 'lightgreen') -or $color -in @('FF0000', '00B050', 'RED', 'GREEN')) {
                        $isCorrect = $true
                    }
                }
                
                $qObj.Options += [PSCustomObject]@{
                    Letter = $let
                    Text = $val
                    Correct = $isCorrect
                }
                $letIndex++
            }
        }
        
        $parsedQuestions += $qObj
    }
    
    Write-Host "Total questions parsed: $($parsedQuestions.Count)"
    
    # Validation checks
    $invalidCount = 0
    foreach ($q in $parsedQuestions) {
        $correctOpts = $q.Options | Where-Object { $_.Correct }
        $correctCount = @($correctOpts).Count
        
        # Print warning if options count is not 4 or correct count is not 1
        if (@($q.Options).Count -ne 4 -or $correctCount -ne 1) {
            $invalidCount++
            Write-Warning "[$($q.De) Q $($q.Q.Substring(0, [Math]::Min(30, $q.Q.Length)))] Options: $(@($q.Options).Count), Correct: $correctCount ($(($correctOpts | ForEach-Object { $_.Letter }) -join ','))"
        }
    }
    
    Write-Host "Invalid/Warning Questions Count: $invalidCount"
    
    # Save to JSON
    $parsedQuestions | ConvertTo-Json -Depth 5 | Out-File -FilePath "parsed_docx_runs.json" -Encoding utf8
    Write-Host "Saved to parsed_docx_runs.json"
    
    # Group counts
    $groups = $parsedQuestions | Group-Object De
    foreach ($g in $groups) {
        Write-Host "$($g.Name) : $($g.Count)"
    }
    
} catch {
    Write-Host "Error: $_"
} finally {
    if (Test-Path $tempDir) {
        Remove-Item -Recurse -Force $tempDir
    }
}
