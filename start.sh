#!/bin/bash

echo "Starting Security LLM Chatbot..."

# Activate backend virtual environment
cd backend || exit
source ../venv/bin/activate

# Start backend server
echo "Starting backend..."
uvicorn main:app --host 0.0.0.0 --port 8000 &
BACK_PID=$!

# Start frontend server
cd ../frontend || exit
echo "Starting frontend..."
npm start &

wait $BACK_PID
