# Download images from The Beer Garden website
$imgDir = "c:\Users\jeiba\Desktop\WEB-RESTAURANTE\images"
if (!(Test-Path $imgDir)) { New-Item -ItemType Directory -Path $imgDir -Force }

# First, fetch the HTML source to extract all image URLs
Write-Host "Fetching homepage HTML..."
$html1 = (Invoke-WebRequest -Uri "https://thebeergarden.es/" -UseBasicParsing).Content
Write-Host "Fetching carta HTML..."
$html2 = (Invoke-WebRequest -Uri "https://thebeergarden.es/carta" -UseBasicParsing).Content
Write-Host "Fetching contacto HTML..."
$html3 = (Invoke-WebRequest -Uri "https://thebeergarden.es/contacto/" -UseBasicParsing).Content
Write-Host "Fetching eventos HTML..."
try { $html4 = (Invoke-WebRequest -Uri "https://thebeergarden.es/eventos/" -UseBasicParsing).Content } catch { $html4 = "" }

$allHtml = $html1 + $html2 + $html3 + $html4

# Extract all image URLs from src attributes and srcset
$pattern = 'https?://thebeergarden\.es/wp-content/uploads/[^\s"''<>)]+\.(jpg|jpeg|png|webp|gif|svg)'
$matches = [regex]::Matches($allHtml, $pattern)
$urls = $matches | ForEach-Object { $_.Value } | Sort-Object -Unique

Write-Host "`nFound $($urls.Count) unique images. Downloading..."

$count = 0
foreach ($url in $urls) {
    $count++
    # Create filename from URL path
    $uri = [System.Uri]$url
    $filename = $uri.AbsolutePath -replace '/wp-content/uploads/', '' -replace '/', '_'
    $dest = Join-Path $imgDir $filename

    # Skip if already downloaded
    if (Test-Path $dest) {
        Write-Host "[$count/$($urls.Count)] SKIP (exists): $filename"
        continue
    }

    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
        Write-Host "[$count/$($urls.Count)] OK: $filename"
    } catch {
        Write-Host "[$count/$($urls.Count)] FAIL: $filename - $($_.Exception.Message)"
    }
}

Write-Host "`nDone! $count images processed. Check folder: $imgDir"
