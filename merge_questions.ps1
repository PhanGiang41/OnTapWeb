# Normalize helper
function Get-Norm($str) {
    if ($str -eq $null) { return '' }
    $normalized = $str.Normalize([System.Text.NormalizationForm]::FormD)
    $s = $normalized.ToLower() -replace '\s', ''
    return $s -replace '[^a-z0-9]', ''
}

# Load existing questions from a markdown file and find the next question number
function Get-LastQuestionNumber($path) {
    if (-not (Test-Path $path)) { return 0 }
    $content = Get-Content -Path $path -Encoding utf8 -Raw
    $matches = [regex]::Matches($content, '(?m)^### C\u00e2u (\d+):')
    $max = 0
    foreach ($m in $matches) {
        $num = [int]$m.Groups[1].Value
        if ($num -gt $max) { $max = $num }
    }
    return $max
}

function Get-ExistingQuestions($path) {
    if (-not (Test-Path $path)) { return @{} }
    $content = Get-Content -Path $path -Encoding utf8 -Raw
    $parts = [regex]::Split($content, '(?m)^### C\u00e2u \d+:')
    $dict = @{}
    for ($i = 1; $i -lt $parts.Length; $i++) {
        $lines = $parts[$i] -split "`n"
        $qTextLines = @()
        foreach ($line in $lines) {
            $trimmed = $line.Trim()
            if ($trimmed -eq '---' -or $trimmed -match '^Ngu\u1ed3n:' -or $trimmed -match '^Total questions:' -or $trimmed -eq '') {
                continue
            }
            if ($trimmed -match '^\s*-\s*\[') {
                break # Options started
            }
            $qTextLines += $trimmed
        }
        $qText = ($qTextLines -join "`n").Trim()
        $norm = Get-Norm $qText
        if ($norm -ne '') {
            $dict[$norm] = $qText
        }
    }
    return $dict
}

# 1. Load existing
$basicPath = 'cau_hoi.md'
$advancedPath = 'cau_hoi_nang_cao.md'

$basicDict = Get-ExistingQuestions $basicPath
$advancedDict = Get-ExistingQuestions $advancedPath

$lastBasicNum = Get-LastQuestionNumber $basicPath
$lastAdvancedNum = Get-LastQuestionNumber $advancedPath

Write-Host "Current Basic Questions count: $($basicDict.Count) | Max Number: $lastBasicNum"
Write-Host "Current Advanced Questions count: $($advancedDict.Count) | Max Number: $lastAdvancedNum"

# 2. Load docx questions
$docx = Get-Content -Path 'parsed_docx_runs.json' -Raw -Encoding utf8 | ConvertFrom-Json

$addedBasic = 0
$addedAdvanced = 0
$seenMissing = @{}

foreach ($q in $docx) {
    $norm = Get-Norm $q.Q
    
    # Skip if duplicate of existing scraped questions
    if ($basicDict.ContainsKey($norm) -or $advancedDict.ContainsKey($norm)) {
        continue
    }
    
    # Skip if duplicate within missing list
    if ($seenMissing.ContainsKey($norm)) {
        continue
    }
    $seenMissing[$norm] = $true
    
    # Format options markdown
    $optMarkdownList = @()
    foreach ($opt in $q.Options) {
        $marker = '[ ]'
        if ($opt.Correct) { $marker = '[x]' }
        $optText = $opt.Text
        # If the option contains tags like <h1>, let's wrap it in code backticks
        if ($optText -match '<[^>]+>' -and -not $optText.Contains('`')) {
            $optText = '`' + $optText + '`'
        }
        $let = $opt.Letter
        $optMarkdownList += '- ' + $marker + ' **' + $let + '.** ' + $optText
    }
    $optMarkdown = $optMarkdownList -join "`r`n"
    
    # Append to correct file using safe concatenation
    if ($q.De -eq 'Đề 1' -or $q.De -eq 'Đề 2') {
        $lastBasicNum++
        $addedBasic++
        $qMarkdown = "`r`n`r`n---`r`n`r`n### C" + [char]0x00e2 + "u " + $lastBasicNum + ': ' + $q.Q + "`r`n`r`n" + $optMarkdown
        Add-Content -Path $basicPath -Value $qMarkdown -Encoding utf8
        Write-Host "Added basic question: $($q.Q.Substring(0, [Math]::Min(30, $q.Q.Length)))"
    } else {
        $lastAdvancedNum++
        $addedAdvanced++
        $qMarkdown = "`r`n`r`n---`r`n`r`n### C" + [char]0x00e2 + "u " + $lastAdvancedNum + ': ' + $q.Q + "`r`n`r`n" + $optMarkdown
        Add-Content -Path $advancedPath -Value $qMarkdown -Encoding utf8
        Write-Host "Added advanced question: $($q.Q.Substring(0, [Math]::Min(30, $q.Q.Length)))"
    }
}

Write-Host "Total added basic: $addedBasic"
Write-Host "Total added advanced: $addedAdvanced"

# Update Total questions header in markdown files
if ($addedBasic -gt 0) {
    $content = Get-Content -Path $basicPath -Encoding utf8 -Raw
    $content = $content -replace '(?m)^Total questions:\s*\d+', ('Total questions: ' + $lastBasicNum)
    $content | Out-File -FilePath $basicPath -Encoding utf8 -Force
}
if ($addedAdvanced -gt 0) {
    $content = Get-Content -Path $advancedPath -Encoding utf8 -Raw
    $content = $content -replace '(?m)^Total questions:\s*\d+', ('Total questions: ' + $lastAdvancedNum)
    $content | Out-File -FilePath $advancedPath -Encoding utf8 -Force
}
