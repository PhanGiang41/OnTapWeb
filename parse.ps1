# Read the JSON file
$jsonContent = Get-Content -Path "quiz_data.json" -Raw | ConvertFrom-Json

# Access the HTML content
$html = $jsonContent.content
$jsonMeta = $jsonContent.json

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
            # là (\u00e0), được (\u0111\u01b0\u1ee3c), chọn (ch\u1ecdn), bằng (b\u1eb1ng), trong, định dạng (\u0111\u1ecbnh d\u1ea1ng)
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

# Regex to split the HTML into list items (questions)
$pattern = '(?s)<li class="wpProQuiz_listItem".*?</li>(?=\s*(?:<li class="wpProQuiz_listItem"|</ol>))'
$matches = [regex]::Matches($html, $pattern)

$questions = @()

foreach ($m in $matches) {
    $qHtml = $m.Value

    # 1. Extract Question ID
    $qId = ""
    if ($qHtml -match 'data-question_id="(\d+)"') {
        $qId = $Matches[1]
    }

    # 2. Extract Question Text
    $qText = ""
    if ($qHtml -match '(?s)<div class="wpProQuiz_question_text">(.*?)</div>') {
        $qText = $Matches[1]
    }

    $qTextClean = Convert-HtmlToMarkdown $qText

    # 3. Extract Options
    $optMatches = [regex]::Matches($qHtml, '(?s)<li class="wpProQuiz_questionListItem" data-pos="(\d+)".*?<label>(.*?)</label>')
    
    $options = @()
    foreach ($optMatch in $optMatches) {
        $pos = $optMatch.Groups[1].Value
        $optText = $optMatch.Groups[2].Value
        $optTextClean = Convert-OptionHtmlToMarkdown $optText
        
        $options += [PSCustomObject]@{
            Pos = [int]$pos
            Text = $optTextClean
        }
    }

    # Sort options by position
    $options = $options | Sort-Object Pos

    # 4. Get Correct Answer from Metadata
    $correctArray = @()
    if ($qId -ne "" -and $jsonMeta.$qId) {
        $correctArray = $jsonMeta.$qId.correct
    }

    $questions += [PSCustomObject]@{
        Id = $qId
        Text = $qTextClean
        Options = $options
        Correct = $correctArray
    }
}

# Output to Markdown file
$mdContent = @()
$title = "T" + [char]0x1ed5 + "ng h" + [char]0x1ee3 + "p c" + [char]0x00e2 + "u h" + [char]0x1ecf + "i tr" + [char]0x1eaf + "c nghi" + [char]0x1ec7 + "m HTML & CSS C" + [char]0x0103 + "n B" + [char]0x1ea3 + "n"
$mdContent += "# $title"
$sourceText = "Ngu" + [char]0x1ed3 + "n: https://stu-nghia.info/on-trac-nghiem-html-css-cb"
$mdContent += $sourceText
$mdContent += ""

$idx = 1
foreach ($q in $questions) {
    $qLabel = "C" + [char]0x00e2 + "u $($idx):"
    $mdContent += "### $qLabel $($q.Text)"
    $mdContent += ""
    
    # Options
    for ($i = 0; $i -lt $q.Options.Count; $i++) {
        $opt = $q.Options[$i]
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
        
        # Format the option
        $optLabel = [char](65 + $i) # A, B, C, D
        $mdContent += "$prefix **$optLabel.** $($opt.Text)"
    }
    
    $mdContent += ""
    $mdContent += "---"
    $mdContent += ""
    $idx++
}

# Use Out-File with utf8 encoding
$mdContent | Out-File -FilePath "cau_hoi.md" -Encoding utf8
Write-Host "Processed $($questions.Count) questions."
