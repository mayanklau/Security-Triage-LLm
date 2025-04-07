Security Triage LLM Chatbot

A simple security log triage chatbot built using:

- **React.js (frontend)**
- **FastAPI (backend)**
- **OpenAI GPT-3.5/4** for log analysis and response generation

It helps triage security logs like SQL injection or XSS by returning risk category, severity, and recommended fixes.

---

## Features

- Submit logs or security findings via form
- Uses GPT to generate:
  - Severity (Low/Medium/High/Critical)
  - Category (e.g. Injection, XSS, Access Control)
  - Summary of Risk
  - Suggested Fix
- React-based UI (no hardcoding API keys)
- FastAPI backend with OpenAI integration
- No secrets are hardcoded — user provides API key each time
- Includes one-command launch script

---

## One-Command Quick Start

Just run this in your terminal to launch everything (backend + frontend + test):

```bash
bash start-all.sh

> Make sure to:

Update your actual OpenAI API key inside start-all.sh

Keep both backend/ and frontend/ folders ready

Run chmod +x start-all.sh once before using it





---

Manual Setup (If Needed)

1. Create virtual environment

cd Security-Triage-LLm
python3 -m venv venv
source venv/bin/activate

2. Install backend dependencies

pip install fastapi uvicorn openai

3. Start backend

cd backend
uvicorn main:app --host 0.0.0.0 --port 8000

4. Start frontend

cd ../frontend
npm install
npm start


---

Example Log to Triage

Paste this in the UI to test:

WAF log: SQL injection attempt on /login using payload: ' OR 1=1 --
Source IP: 10.0.0.55


---

Output (from GPT)

1. Severity: Critical
2. Category: Injection
3. Summary: SQL injection allows bypassing authentication
4. Fix: Use parameterized queries and input validation


---

File Structure

/backend      - FastAPI app
/frontend     - React app
start-all.sh  - One-click startup script
README.md     - You are here


---

License

MIT
