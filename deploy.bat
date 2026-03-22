@echo off
echo ========================================
echo   GitHub Deployment Script for Jeffrin
echo ========================================

:: Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not found in PATH.
    pause
    exit /b
)

:: Initialize git if needed
if not exist .git (
    echo [1/5] Initializing Git repository...
    git init
)

:: Add files
echo [2/5] Adding files...
git add .

:: Commit
echo [3/5] Committing changes...
git commit -m "Upgrade: High-impact project case studies and modal UI"

:: Remote setup
set /p REPO_URL="Enter your GitHub Repository URL (e.g., https://github.com/jeffrinj07/portfolio.git): "
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

:: Branch setup
echo [4/5] Setting branch to main...
git branch -M main

:: Push
echo [5/5] Pushing to GitHub...
echo (You may be asked to log in)
git push -u origin main

echo ========================================
echo   Deployment Complete! 
echo ========================================
pause
