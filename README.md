Security Triage LLM Chatbot

A FastAPI + React-powered chatbot that uses OpenAI GPT to triage security logs or findings and suggest risk, severity, and fix steps.

## Features

- Input attack logs (e.g. SQLi, XSS)
- Powered by GPT-3.5/4
- Returns risk, category, severity & recommended fix
- React frontend + FastAPI backend
- CORS and OpenAI key injection supported

## Getting Started

### Backend

```bash
cd backend
source ../venv/bin/activate
uvicorn main:app --host 0.0.0.0 --port 8000

Frontend

cd frontend
npm install
npm start

Environment Setup

Create a .env file (optional) or use API key directly in frontend.

Example Log to Triage

WAF detected XSS attempt on /search?q=<script>alert(1)</script>

License

MIT
