@echo off
setlocal
echo INIT DB ............................................................................................
docker start peba-app

echo INIT SERVER ........................................................................................
@REM .\env\Scripts\python.exe -m waitress --port=8000 --debug=true wsgi:app
.\env\Scripts\python.exe wsgi.py

pause
