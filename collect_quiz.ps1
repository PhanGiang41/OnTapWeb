# Initialize dictionary to store unique questions
$uniqueQuestions = @{}
$runsWithNoNewQuestions = 0
$maxRuns = 25

# Helper to convert HTML to Markdown for Question Text
function Convert-HtmlToMarkdown($htmlText) {
    if ($htmlText -eq $null) { return "" }
    
    # 1. Replace <code>...</code> with `...`
    $htmlText = [regex]::Replace($htmlText, '(?s)<code[^>]*>\s*(.*?)\s*</code>', '`$1`')
    
    # 2. Replace <style>...</style> with ```css \n ... \n ```
    $htmlText = [regex]::Replace($htmlText, '(?s)<style[^>]*>\s*(.*?)\s*</style>', ("`n" + '```css' + "`n" + '$1' + "`n" + '```'))
    
    # 3. Replace <br /> with newline
    $htmlText = $htmlText -replace '<br\s*/?>', "`n"
    
    # 4. Remove block tags, replacing with newlines
    $htmlText = $htmlText -replace '</?p>', "`n"
    $htmlText = $htmlText -replace '</?div[^>]*>', "`n"
    $htmlText = $htmlText -replace '</?ul[^>]*>', "`n"
    $htmlText = $htmlText -replace '</?ol[^>]*>', "`n"
    
    # For list items, replace <li>Text</li> with ` - Text`
    $htmlText = [regex]::Replace($htmlText, '(?s)<li>\s*(.*?)\s*</li>', ("`n" + '- $1'))
    
    # Strip any remaining HTML tags (like span, strong, etc.)
    $htmlText = $htmlText -replace '(?s)<.*?>', ""
    
    # 5. Decode HTML entities
    $htmlText = [System.Net.WebUtility]::HtmlDecode($htmlText)
    
    # 6. Normalize newlines
    $htmlText = $htmlText -replace "\r\n", "`n"
    $htmlText = [regex]::Replace($htmlText, '\n{3,}', "`n`n")
    
    return $htmlText.Trim()
}

# Helper to convert HTML to Markdown for Option Text
function Convert-OptionHtmlToMarkdown($htmlText) {
    if ($htmlText -eq $null) { return "" }
    
    # 1. Strip input and span
    $htmlText = $htmlText -replace '<input[^>]*>', ""
    $htmlText = $htmlText -replace '<span[^>]*>.*?</span>', ""
    
    # 2. Check if it contains code entities before decoding
    $hasEntities = $htmlText -match '&lt;|&gt;'
    $hasCodeTag = $htmlText -match '<code[^>]*>'
    
    # 3. Replace <code>...</code> with `...`
    $htmlText = [regex]::Replace($htmlText, '(?s)<code[^>]*>\s*(.*?)\s*</code>', '`$1`')
    
    # 4. Convert basic styling
    $htmlText = $htmlText -replace '<b>', "**"
    $htmlText = $htmlText -replace '</b>', "**"
    $htmlText = $htmlText -replace '<strong>', "**"
    $htmlText = $htmlText -replace '</strong>', "**"
    $htmlText = $htmlText -replace '<i>', "*"
    $htmlText = $htmlText -replace '</i>', "*"
    $htmlText = $htmlText -replace '<em>', "*"
    $htmlText = $htmlText -replace '</em>', "*"
    
    # Replace <br /> with <br> to preserve line break in markdown
    $htmlText = $htmlText -replace '<br\s*/?>', " <br> "
    
    # Remove any other HTML tags
    $htmlText = $htmlText -replace '(?s)<.*?>', ""
    
    # 5. Decode HTML entities
    $htmlText = [System.Net.WebUtility]::HtmlDecode($htmlText).Trim()
    
    # 6. If it had HTML entities (like &lt;br /&gt;), wrap it in backticks so it renders as code
    if ($hasEntities -and -not $hasCodeTag -and -not ($htmlText -match '^`.*`$')) {
        $htmlText = '`' + $htmlText + '`'
    } else {
        # Other heuristics for code options
        $isCode = $false
        if ($htmlText -match '^<[^>]+>$') {
            $isCode = $true
        } elseif ($htmlText -match '\{|\}') {
            $isCode = $true
        } elseif ($htmlText -match '^\/\*|\*\/$|^\/\/') {
            $isCode = $true
        } elseif ($htmlText -match '^[a-zA-Z-]+\s*:\s*[a-zA-Z0-9#-]+') {
            # Check for Vietnamese words using unicode codepoint regex to prevent corruption
            $viWordsPattern = '\b(l\u00e0|\u0111\u01b0\u1ee3c|ch\u1ecdn|b\u1eb1ng|trong|\u0111\u1ecbnh d\u1ea1ng)\b'
            if (-not ($htmlText -match $viWordsPattern)) {
                $isCode = $true
            }
        }
        
        if ($isCode -and -not ($htmlText -match '^`.*`$')) {
            $htmlText = '`' + $htmlText + '`'
        }
    }
    
    return $htmlText
}

# Run the collection loop
for ($run = 1; $run -le $maxRuns; $run++) {
    Write-Host "Running iteration $run..."
    
    $body = @{
        action = 'wp_pro_quiz_admin_ajax'
        func = 'quizLoadData'
        'data[quizId]' = 2
    }
    
    try {
        $response = Invoke-RestMethod -Uri 'https://stu-nghia.info/wp-admin/admin-ajax.php' -Method Post -Body $body -UserAgent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' -TimeoutSec 15
    } catch {
        Write-Host "Error fetching data: $_"
        Start-Sleep -Seconds 2
        continue
    }
    
    if (-not $response -or -not $response.content) {
        Write-Host "Empty response received."
        continue
    }
    
    $html = $response.content
    $jsonMeta = $response.json
    
    # Regex to split HTML into list items (questions)
    $pattern = '(?s)<li class="wpProQuiz_listItem".*?</li>(?=\s*(?:<li class="wpProQuiz_listItem"|</ol>))'
    $matches = [regex]::Matches($html, $pattern)
    
    $newQuestionsInThisRun = 0
    
    foreach ($m in $matches) {
        $qHtml = $m.Value
        
        $qId = ""
        if ($qHtml -match 'data-question_id="(\d+)"') {
            $qId = $Matches[1]
        }
        
        if ($qId -eq "") { continue }
        
        # Check if we already have this question
        if ($uniqueQuestions.ContainsKey($qId)) {
            continue
        }
        
        $newQuestionsInThisRun++
        
        # Extract Question Text
        $qText = ""
        if ($qHtml -match '(?s)<div class="wpProQuiz_question_text">(.*?)</div>') {
            $qText = $Matches[1]
        }
        
        # Extract Options
        $optMatches = [regex]::Matches($qHtml, '(?s)<li class="wpProQuiz_questionListItem" data-pos="(\d+)".*?<label>(.*?)</label>')
        $options = @()
        foreach ($optMatch in $optMatches) {
            $pos = $optMatch.Groups[1].Value
            $optText = $optMatch.Groups[2].Value
            $options += @{
                Pos = [int]$pos
                RawText = $optText
            }
        }
        
        # Get correct answer array
        $correctArray = @()
        if ($jsonMeta.$qId) {
            $correctArray = $jsonMeta.$qId.correct
        }
        
        $uniqueQuestions[$qId] = @{
            Id = $qId
            RawText = $qText
            Options = $options
            Correct = $correctArray
        }
    }
    
    Write-Host "Iteration $($run): Found $($matches.Count) questions, $newQuestionsInThisRun were new. Total unique so far: $($uniqueQuestions.Count)"
    
    if ($newQuestionsInThisRun -eq 0) {
        $runsWithNoNewQuestions++
    } else {
        $runsWithNoNewQuestions = 0
    }
    
    if ($runsWithNoNewQuestions -ge 5) {
        Write-Host "Stopped early because no new questions were found in 5 consecutive runs."
        break
    }
    
    Start-Sleep -Seconds 1
}

# Compile and export to Markdown
$mdContent = @()
$title = "T" + [char]0x1ed5 + "ng h" + [char]0x1ee3 + "p c" + [char]0x00e2 + "u h" + [char]0x1ecf + "i tr" + [char]0x1eaf + "c nghi" + [char]0x1ec7 + "m HTML & CSS C" + [char]0x0103 + "n B" + [char]0x1ea3 + "n"
$mdContent += "# $title"
$sourceText = "Ngu" + [char]0x1ed3 + "n: https://stu-nghia.info/on-trac-nghiem-html-css-cb"
$mdContent += $sourceText
$mdContent += "Total questions: $($uniqueQuestions.Count)"
$mdContent += ""

$idx = 1
foreach ($qId in $uniqueQuestions.Keys) {
    $q = $uniqueQuestions[$qId]
    $qTextClean = Convert-HtmlToMarkdown $q.RawText
    
    $qLabel = "C" + [char]0x00e2 + "u $($idx):"
    $mdContent += "### $qLabel $qTextClean"
    $mdContent += ""
    
    # Options
    $sortedOptions = $q.Options | Sort-Object Pos
    for ($i = 0; $i -lt $sortedOptions.Count; $i++) {
        $opt = $sortedOptions[$i]
        $optTextClean = Convert-OptionHtmlToMarkdown $opt.RawText
        
        $isCorrect = $false
        if ($q.Correct -and $i -lt $q.Correct.Count) {
            if ($q.Correct[$i] -eq 1) {
                $isCorrect = $true
            }
        }
        
        $prefix = "- [ ]"
        if ($isCorrect) {
            $prefix = "- [x]"
        }
        
        $optLabel = [char](65 + $i)
        $mdContent += "$prefix **$optLabel.** $optTextClean"
    }
    
    $mdContent += ""
    $mdContent += "---"
    $mdContent += ""
    $idx++
}

# Save Markdown
$mdContent | Out-File -FilePath "cau_hoi.md" -Encoding utf8
Write-Host "Completed! Saved $($uniqueQuestions.Count) unique questions to cau_hoi.md."
