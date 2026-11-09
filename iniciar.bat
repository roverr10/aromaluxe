@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Instalando dependencias, espera un momento...
  call npm install
)
echo Iniciando servidor local en http://localhost:5173
call npm run dev
pause
