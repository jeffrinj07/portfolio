@echo off
if not exist assets mkdir assets
copy /Y "C:\Users\Lenovo\.gemini\antigravity\brain\61916e33-211b-4ca3-876d-771f5b207039\hero_iot_ai_bg_1774109126037.png" "assets\hero.png"
copy /Y "C:\Users\Lenovo\.gemini\antigravity\brain\61916e33-211b-4ca3-876d-771f5b207039\voiceguard_ai_card_1774109362822.png" "assets\voiceguard.png"
copy /Y "C:\Users\Lenovo\.gemini\antigravity\brain\61916e33-211b-4ca3-876d-771f5b207039\smart_beekeeping_card_1774109663480.png" "assets\beekeeping.png"
copy /Y "C:\Users\Lenovo\.gemini\antigravity\brain\61916e33-211b-4ca3-876d-771f5b207039\miners_guardian_card_1774109888208.png" "assets\miners.png"
dir /s assets
