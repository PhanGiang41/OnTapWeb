$lines = Import-Csv -Path "docx_formatted_lines.csv" -Encoding utf8

$questions = @()
$currentDe = "Unknown"
$currentQ = $null

# Regex patterns
$qPattern = '^\d+\.\s*(.*)$'
$qhPattern = '^Câu hỏi\s*\d+:\s*(.*)$'
$optPattern = '^([a-e])\.\s*(.*)$'

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $text = $line.Text.Trim()
    $bold = $line.Bold -eq "True"
    $highlight = $line.Highlight.Trim().ToLower()
    $color = $line.Color.Trim().ToUpper()
    
    if (-not $text) { continue }
    
    if ($text -match 'Đề 1') {
        $currentDe = "Đề 1"
        continue
    } elseif ($text -match 'Đề 2') {
        $currentDe = "Đề 2"
        continue
    } elseif ($text -match 'Đề 3') {
        $currentDe = "Đề 3"
        continue
    } elseif ($text -match 'Đề 4') {
        $currentDe = "Đề 4"
        continue
    }
    
    $isQ = $false
    $qBody = ""
    if ($text -match $qPattern) {
        $qBody = $Matches[1].Trim()
        $isQ = $true
    } elseif ($text -match $qhPattern) {
        $qBody = $Matches[1].Trim()
        $isQ = $true
    }
    
    if ($isQ) {
        if ($currentQ -ne $null) {
            $questions += $currentQ
        }
        
        $currentQ = [PSCustomObject]@{
            De = $currentDe
            Q = $qBody
            Options = @()
            Type = "multiline"
            RawText = $text
            RowIdx = $i
        }
        
        # Check if the question line itself contains inline options
        # E.g. "a. x b. y c. z d. w" or "a. ...b. ...c. ...d. ..."
        # Let's check using regex matching "a. ... b. ... c. ..."
        if ($text -match '\s+a\.\s+(.*)$') {
            $currentQ.Type = "inline"
            # Parse inline options from $text
            # We can split by option letters: a., b., c., d., e.
            # E.g. "ab<c>d</c> xuất ra... a. ab<c>d</c> b. abd c. abcd d. Lỗi"
            $qPart = $text
            $optParts = @()
            
            $firstOptPos = $text.IndexOf(" a.")
            if ($firstOptPos -lt 0) { $firstOptPos = $text.IndexOf("a.") }
            if ($firstOptPos -ge 0) {
                $qPart = $text.Substring(0, $firstOptPos).Trim()
                # Clean up question number
                $qPart = $qPart -replace '^\d+\.\s*', ''
                $qPart = $qPart -replace '^Câu hỏi\s*\d+:\s*', ''
                $currentQ.Q = $qPart
                
                $optText = $text.Substring($firstOptPos).Trim()
                # Split options. We match letters followed by dot.
                # Find positions of "a.", "b.", "c.", "d.", "e."
                $posA = $optText.IndexOf("a.")
                $posB = $optText.IndexOf("b.")
                $posC = $optText.IndexOf("c.")
                $posD = $optText.IndexOf("d.")
                $posE = $optText.IndexOf("e.")
                
                $positions = @()
                if ($posA -ge 0) { $positions += @{ Let = "A"; Pos = $posA } }
                if ($posB -ge 0) { $positions += @{ Let = "B"; Pos = $posB } }
                if ($posC -ge 0) { $positions += @{ Let = "C"; Pos = $posC } }
                if ($posD -ge 0) { $positions += @{ Let = "D"; Pos = $posD } }
                if ($posE -ge 0) { $positions += @{ Let = "E"; Pos = $posE } }
                
                $positions = $positions | Sort-Object { $_.Pos }
                
                for ($p = 0; $p -lt $positions.Count; $p++) {
                    $start = $positions[$p].Pos + 2 # Skip "a."
                    $end = $optText.Length
                    if ($p -lt $positions.Count - 1) {
                        $end = $positions[$p+1].Pos
                    }
                    $optVal = $optText.Substring($start, $end - $start).Trim()
                    # Clean trailing punctuation
                    $optVal = $optVal -replace '^[.\s:]+', ''
                    
                    # For inline, how to determine correct?
                    # The CSV row itself has highlight/color/bold.
                    # In some cases, since options are inline, the styling is on the whole line, or maybe the highlight is yellow.
                    # Let's see if the line has highlight=yellow. If it does, we'll need to look at which option is highlighted, or if we can see it in docx_questions.txt or another way.
                    # Wait, let's check docx_questions.txt or XML to see if correct answer is bolded or highlighted.
                    # Since it is inline, the parser that created docx_formatted_lines.csv might have put styling attributes at paragraph level or run level.
                    # Let's inspect the highlight/bold of this row. If highlight is yellow, is there a way to know which option?
                    # Let's check how the docx_formatted_lines.csv represents it.
                    # E.g. in row 151: "1. Đoạn mã <pre> 1 - 10 </pre> xuất ra trình duyệt là gì?a. 1-10b. 1 - 10 c. 1 10d. 1-10", Bold=True, Highlight=yellow
                    # How to find the correct answer for inline?
                    # We can cross-reference with stu-nghia basic/advanced or manually inspect.
                    # Let's default correct to false, we can resolve it.
                    $currentQ.Options += [PSCustomObject]@{
                        Letter = $positions[$p].Let
                        Text = $optVal
                        Correct = $false
                    }
                }
            }
        }
    } else {
        # Check if it's a multiline option
        if ($currentQ -ne $null -and $currentQ.Type -eq "multiline") {
            # Let's check if the text matches standard option format
            if ($text -match $optPattern) {
                $optLet = $Matches[1].ToUpper()
                $optVal = $Matches[2].Trim()
                
                # Determine correct
                $isCorrect = $false
                if ($highlight -in @('yellow', 'green', 'lightgreen')) {
                    $isCorrect = $true
                } elseif ($bold -and -not ($currentQ.RawText -match 'True')) {
                    # Option is bold but question is not bold, or option specifically has Bold=True
                    $isCorrect = $true
                }
                
                if ($color -in @('FF0000', '00B050', 'RED', 'GREEN')) {
                    $isCorrect = $true
                }
                
                $currentQ.Options += [PSCustomObject]@{
                    Letter = $optLet
                    Text = $optVal
                    Correct = $isCorrect
                    Bold = $bold
                    Highlight = $highlight
                    Color = $color
                    RawText = $text
                }
            } else {
                # Not a standard option. Let's see if it contains inline options in this non-question line
                # E.g. "a. xx b. yy..."
                if ($text -match '^a\.\s+(.*)b\.\s+(.*)') {
                    # Handle inline options on a separate line
                    # E.g. "a. colpan b. colspanc. rowpand. rowspan"
                    $optText = $text
                    $posA = $optText.IndexOf("a.")
                    $posB = $optText.IndexOf("b.")
                    $posC = $optText.IndexOf("c.")
                    $posD = $optText.IndexOf("d.")
                    $posE = $optText.IndexOf("e.")
                    
                    $positions = @()
                    if ($posA -ge 0) { $positions += @{ Let = "A"; Pos = $posA } }
                    if ($posB -ge 0) { $positions += @{ Let = "B"; Pos = $posB } }
                    if ($posC -ge 0) { $positions += @{ Let = "C"; Pos = $posC } }
                    if ($posD -ge 0) { $positions += @{ Let = "D"; Pos = $posD } }
                    if ($posE -ge 0) { $positions += @{ Let = "E"; Pos = $posE } }
                    
                    $positions = $positions | Sort-Object { $_.Pos }
                    
                    for ($p = 0; $p -lt $positions.Count; $p++) {
                        $start = $positions[$p].Pos + 2
                        $end = $optText.Length
                        if ($p -lt $positions.Count - 1) {
                            $end = $positions[$p+1].Pos
                        }
                        $optVal = $optText.Substring($start, $end - $start).Trim()
                        # Clean trailing
                        $optVal = $optVal -replace '^[.\s:]+', ''
                        
                        # Check highlight
                        $isCorrect = $false
                        if ($highlight -in @('yellow', 'green', 'lightgreen')) {
                            $isCorrect = $true
                        }
                        
                        $currentQ.Options += [PSCustomObject]@{
                            Letter = $positions[$p].Let
                            Text = $optVal
                            Correct = $isCorrect
                        }
                    }
                } else {
                    # Run-on text of question or description
                    $currentQ.Q += "`n" + $text
                }
            }
        }
    }
}

if ($currentQ -ne $null) {
    $questions += $currentQ
}

Write-Host "Total parsed questions: $($questions.Count)"
$deCounts = @{}
foreach ($q in $questions) {
    $deCounts[$q.De] = $deCounts[$q.De] + 1
}
Write-Host "By De: $($deCounts | Out-String)"

$questions | ConvertTo-Json -Depth 5 | Out-File -FilePath "parsed_docx_questions.json" -Encoding utf8
Write-Host "Exported to parsed_docx_questions.json"
