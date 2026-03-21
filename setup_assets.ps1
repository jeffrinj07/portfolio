$brainDir = "C:\Users\Lenovo\.gemini\antigravity\brain\61916e33-211b-4ca3-876d-771f5b207039"
$targetDir = Join-Path (Get-Location) "assets"

if (!(Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force
}

$files = @{
    "hero_iot_ai_bg_1774109126037.png" = "hero.png";
    "voiceguard_ai_card_1774109362822.png" = "voiceguard.png";
    "smart_beekeeping_card_1774109663480.png" = "beekeeping.png";
    "miners_guardian_card_1774109888208.png" = "miners.png";
}

foreach ($src in $files.Keys) {
    $srcPath = Join-Path $brainDir $src
    $destPath = Join-Path $targetDir $files[$src]
    Copy-Item -Path $srcPath -Destination $destPath -Force
    Write-Host "Copied $src to $destPath"
}

Get-ChildItem -Path $targetDir
