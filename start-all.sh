#!/bin/bash

echo ">>> Activating virtualenv"
source venv/bin/activate

echo ">>> Starting backend..."
cd backend || exit
uvicorn main:app --host 0.0.0.0 --port 8000 &
sleep 3

echo ">>> Starting frontend..."
cd ../frontend || exit
npm start &
sleep 5

echo ">>> Running test payload against backend"
API_KEY="sk-replace-with-your-real-key"
curl -X POST http://localhost:8000/triage \
  -H "Content-Type: application/json" \
  -d "{\"api_key\": \"${API_KEY}\", \"finding\": \"Firewall log: Potential XSS attempt on /search?q=<script>alert('xss')</script>\"}"
