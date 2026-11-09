#!/bin/bash
cd "$(dirname "$0")"
[ -d node_modules ] || { echo "Instalando dependencias..."; npm install; }
echo "Iniciando servidor local en http://localhost:5173"
npm run dev
