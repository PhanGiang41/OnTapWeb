try {
    $StorageFileType = [Type]::GetType("Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime")
    $BitmapDecoderType = [Type]::GetType("Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics, ContentType=WindowsRuntime")
    $OcrEngineType = [Type]::GetType("Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime")

    if (-not $StorageFileType -or -not $BitmapDecoderType -or -not $OcrEngineType) {
        Write-Error "Failed to load one or more WinRT types."
        exit 1
    }

    $jpgFiles = Get-ChildItem "c:\Users\Admin\Desktop\Web\drive-download-20260616T045835Z-3-001\*.jpg"
    $output = @()

    foreach ($file in $jpgFiles) {
        Write-Host "OCR processing on $($file.Name)..."
        try {
            $storageFile = $StorageFileType::GetFileFromPathAsync($file.FullName).GetAwaiter().GetResult()
            # OpenAsync with FileAccessMode.Read (0)
            $stream = $storageFile.OpenAsync(0).GetAwaiter().GetResult()
            $decoder = $BitmapDecoderType::CreateAsync($stream).GetAwaiter().GetResult()
            $bitmap = $decoder.GetSoftwareBitmapAsync().GetAwaiter().GetResult()
            
            $engine = $OcrEngineType::TryCreateFromUserProfileLanguages()
            if ($null -eq $engine) {
                $output += "========================================`nFILE: $($file.Name)`n========================================`nError: Cannot create OcrEngine.`n`n"
                continue
            }
            
            $result = $engine.RecognizeAsync($bitmap).GetAwaiter().GetResult()
            $output += "========================================`nFILE: $($file.Name)`n========================================`n$($result.Text)`n`n"
        } catch {
            $output += "========================================`nFILE: $($file.Name)`n========================================`nError: $_`n`n"
        }
    }

    $output | Out-File -FilePath "c:\Users\Admin\Desktop\Web\ocr_results.txt" -Encoding utf8
    Write-Host "OCR finished successfully!"
} catch {
    Write-Error "Script execution error: $_"
}
