@echo off
set GIT_CMD="C:\Users\Tharun Rachabanti\AppData\Local\Programs\Git\cmd\git.exe"

echo Configuring Git...
%GIT_CMD% config --global user.name "Tharun Rachabanti"
echo Enter your email address for Git configuration (e.g. yourname@example.com):
set /p git_email=
%GIT_CMD% config --global user.email "%git_email%"

echo Appending to README...
echo "# devmatrixlab" >> README.md

echo Initializing Git repository...
%GIT_CMD% init
if %errorlevel% neq 0 goto :error

echo Adding files...
%GIT_CMD% add .
if %errorlevel% neq 0 goto :error

echo Committing...
%GIT_CMD% commit -m "first commit"
if %errorlevel% neq 0 goto :error

echo Renaming branch to master...
%GIT_CMD% branch -M master
if %errorlevel% neq 0 goto :error

echo Configuring remote...
%GIT_CMD% remote remove origin 2>nul
%GIT_CMD% remote add origin https://github.com/TharunRachabanti/devmatrixlab.git
if %errorlevel% neq 0 goto :error

echo Pushing to GitHub...
%GIT_CMD% push -u origin master
if %errorlevel% neq 0 goto :error

echo.
echo SUCCESS! Your code is now on GitHub.
pause
exit /b 0

:error
echo.
echo ERROR: Something went wrong. Please check the output above.
echo Ensure Git is installed and you are logged in.
pause
exit /b 1
