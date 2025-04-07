from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import openai

app = FastAPI()

# Enable CORS to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/triage")
async def triage(request: Request):
    try:
        body = await request.json()
        api_key = body.get("api_key")
        finding = body.get("finding")

        if not api_key or not finding:
            return {"error": "Missing API key or finding"}

        openai.api_key = api_key

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are a security triage expert. Given a security finding or log, return severity, category, impact, and suggested fix."
                },
                {
                    "role": "user",
                    "content": finding
                }
            ]
        )

        answer = response["choices"][0]["message"]["content"]
        return {"result": answer}

    except Exception as e:
        return {"error": str(e)}
