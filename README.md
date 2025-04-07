# Security LLM Triage Chatbot

A lightweight, terminal-friendly chatbot for triaging security findings using OpenAI GPT.  
Built entirely in **Termux**, this project features:

- **FastAPI** backend for handling triage requests  
- **React** frontend for easy input and viewing results  
- **OpenAI GPT** for vulnerability interpretation  
- **No hardcoding** of secrets (API keys passed securely at runtime)  
- **Optional Telegram alerts**  
- **CSV & Markdown logging** (coming soon)

---

## Features

- Input raw vulnerability findings  
- Get severity, risk summary, category, and fix suggestions via LLM  
- Use Telegram token (optional) to forward results  
- Fully CLI and mobile-friendly  
- No dependencies on heavy infra or hardcoded secrets  

---

## Setup (Termux tested)

```bash
# Clone
git clone https://github.com/mayanklau/Security-Triage-LLm.git
cd Security-Triage-LLm

# Run all (backend + frontend)
bash start.sh
