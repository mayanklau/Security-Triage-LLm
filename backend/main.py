from fastapi import FastAPI
from pydantic import BaseModel
import openai

app = FastAPI()

class TriageInput(BaseModel):
    api_key: str
    finding: str

@app.post("/triage")
def triage(input: TriageInput):
    openai.api_key = input.api_key
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": input.finding}
        ]
    )
    return {"result": response['choices'][0]['message']['content']}
