# Parser script to merge basic and advanced HTML/CSS/JS questions into a clean quiz_data.js

function Escape-ForJsJson($str) {
    if ($str -eq $null) { return "" }
    # Escape backslashes first
    $str = $str.Replace('\', '\\')
    # Escape double quotes
    $str = $str.Replace('"', '\"')
    # Replace carriage return and newlines with literal \n sequence
    $str = $str.Replace("`r`n", "\n").Replace("`n", "\n")
    return $str
}

function Get-QuestionsFromMarkdown($filePath) {
    if (-not (Test-Path $filePath)) {
        Write-Host "Warning: File $filePath not found!"
        return @()
    }
    
    Write-Host "Parsing: $filePath"
    $content = Get-Content -Path $filePath -Encoding utf8 -Raw
    # Normalize newlines
    $content = $content -replace "`r`n", "`n"
    
    # Split by the question header "### Câu \d+:"
    $parts = [regex]::Split($content, '(?m)^### C\u00e2u \d+:')
    
    $fileQuestions = @()
    
    # Skip the first part (preamble)
    for ($pIdx = 1; $pIdx -lt $parts.Length; $pIdx++) {
        $part = $parts[$pIdx]
        $lines = $part -split "`n"
        
        $qTextLines = @()
        $options = @{}
        $answer = ""
        
        foreach ($line in $lines) {
            $trimmedLine = $line.Trim()
            if ($trimmedLine -eq "") {
                if ($qTextLines.Count -gt 0 -and $options.Count -eq 0) {
                    $qTextLines += ""
                }
                continue
            }
            
            if ($trimmedLine -eq "---" -or $trimmedLine -match '^Ngu\u1ed3n:' -or $trimmedLine -match '^Total questions:') {
                continue
            }
            
            # Match option lines like: - [ ] **A.** Text or - [x] **A.** Text
            if ($trimmedLine -match '^\s*-\s*\[([ xX])\]\s*\*\*([A-Z])\.\*\*\s*(.*)$') {
                # Save Matches before they get overwritten by any inner matches
                $match1 = $Matches[1]
                $letter = $Matches[2]
                $match3 = $Matches[3]
                
                $optText = if ($match3 -eq $null) { "" } else { $match3.Trim() }
                $isCorrect = ($match1 -match '[xX]')
                
                $options[$letter] = $optText
                if ($isCorrect) {
                    $answer = $letter
                }
            } else {
                # If we haven't seen options yet, it's question text
                if ($options.Count -eq 0) {
                    $qTextLines += $trimmedLine
                }
            }
        }
        
        # Trim leading and trailing empty lines from the question text
        while ($qTextLines.Count -gt 0 -and $qTextLines[0] -eq "") {
            $qTextLines = $qTextLines[1..($qTextLines.Count-1)]
        }
        while ($qTextLines.Count -gt 0 -and $qTextLines[-1] -eq "") {
            $qTextLines = $qTextLines[0..($qTextLines.Count-2)]
        }
        
        $qText = $qTextLines -join "`n"
        $qText = $qText.Trim()
        
        if ($qText -ne "" -and $options.Count -gt 0) {
            $fileQuestions += [PSCustomObject]@{
                q = $qText
                options = $options
                answer = $answer
                explanation = ""
            }
        }
    }
    
    Write-Host "Found $($fileQuestions.Count) valid questions in $filePath."
    return $fileQuestions
}

# 1. Parse both markdown files
$basicQuestions = Get-QuestionsFromMarkdown "cau_hoi.md"
$advancedQuestions = Get-QuestionsFromMarkdown "cau_hoi_nang_cao.md"

# 2. Merge them
$allQuestions = @()
$seenQuestions = @{}

# We want to de-duplicate identical questions (case-insensitive on normalized question text)
foreach ($q in ($basicQuestions + $advancedQuestions)) {
    $normQ = $q.q.ToLower().Replace(" ", "").Replace("`n", "")
    if ($seenQuestions.ContainsKey($normQ)) {
        Write-Host "Duplicate found and skipped: $($q.q.Substring(0, [Math]::Min($q.q.Length, 60)))..."
        continue
    }
    $seenQuestions[$normQ] = $true
    $allQuestions += $q
}

Write-Host "Total merged unique questions: $($allQuestions.Count)"

# 3. Format as JS array content
$jsQuestions = @()
foreach ($q in $allQuestions) {
    $qTextEscaped = Escape-ForJsJson $q.q
    
    $optsStrList = @()
    $sortedKeys = $q.options.Keys | Sort-Object
    foreach ($key in $sortedKeys) {
        $optTextEscaped = Escape-ForJsJson $q.options[$key]
        $optsStrList += "      ${key}: ""$optTextEscaped"""
    }
    $optsStr = $optsStrList -join ",`n"
    
    $jsItem = @"
  {
    q: "$qTextEscaped",
    options: {
$optsStr
    },
    answer: "$($q.answer)",
    explanation: ""
  }
"@
    $jsQuestions += $jsItem
}

$jsContent = "const quizData = [`n" + ($jsQuestions -join ",`n") + "`n];`n"

# 4. Save to quiz_data.js
$jsContent | Out-File -FilePath "quiz_data.js" -Encoding utf8
Write-Host "Successfully wrote $($allQuestions.Count) questions to quiz_data.js"
