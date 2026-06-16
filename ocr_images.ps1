[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$as = [Windows.Security.Credentials.PasswordVault, Windows.Security.Credentials, ContentType=WindowsRuntime]

# OCR script using Windows Runtime APIs
$code = @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

public class OcrHelper {
    public static async Task<string> RecognizeTextAsync(string imagePath) {
        try {
            var file = await StorageFile.GetFileFromPathAsync(imagePath);
            using (var stream = await file.OpenAsync(FileAccessMode.Read)) {
                var decoder = await BitmapDecoder.CreateAsync(stream);
                var softwareBitmap = await decoder.GetSoftwareBitmapAsync();
                
                // Use default system language for OCR
                var ocrEngine = OcrEngine.TryCreateFromUserProfileLanguages();
                if (ocrEngine == null) {
                    return "Error: Cannot create OcrEngine from user profile languages.";
                }
                
                var ocrResult = await ocrEngine.RecognizeAsync(softwareBitmap);
                return ocrResult.Text;
            }
        } catch (Exception ex) {
            return "Error: " + ex.Message;
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies @(
    "System.Runtime.WindowsRuntime",
    "Windows.Foundation.UniversalApiContract",
    "Windows.Foundation.FoundationContract"
) -ErrorAction SilentlyContinue

# Find all JPG files in the drive-download folder
$jpgFiles = Get-ChildItem "c:\Users\Admin\Desktop\Web\drive-download-20260616T045835Z-3-001\*.jpg"
$output = @()

foreach ($file in $jpgFiles) {
    Write-Host "Processing OCR on $($file.Name)..."
    $task = [OcrHelper]::RecognizeTextAsync($file.FullName)
    $text = $task.GetAwaiter().GetResult()
    $output += "========================================`nFILE: $($file.Name)`n========================================`n$text`n`n"
}

$output | Out-File -FilePath "c:\Users\Admin\Desktop\Web\ocr_results.txt" -Encoding utf8
Write-Host "OCR processing finished!"
