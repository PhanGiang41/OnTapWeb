$body = @{
    action = 'wp_pro_quiz_admin_ajax'
    func = 'quizLoadData'
    'data[quizId]' = 2
}
$response = Invoke-RestMethod -Uri 'https://stu-nghia.info/wp-admin/admin-ajax.php' -Method Post -Body $body -UserAgent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
$response | ConvertTo-Json -Depth 10 | Out-File -FilePath 'quiz_data.json' -Encoding utf8
Write-Host "Completed fetching quiz data."
