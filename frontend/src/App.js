import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [backendUrl, setBackendUrl] = useState('http://localhost:8000');
  const [finding, setFinding] = useState('');
  const [result, setResult] = useState('');

  const handleTriage = async () => {
    setResult("Sending request to backend...");
    try {
      const response = await axios.post(`${backendUrl}/triage`, {
        api_key: apiKey,
        finding: finding
      });

      if (response.data.result) {
        setResult(response.data.result);
      } else if (response.data.error) {
        setResult("OpenAI Error: " + response.data.error);
      } else {
        setResult("Unexpected response: " + JSON.stringify(response.data));
      }

    } catch (error) {
      if (error.response) {
        setResult("OpenAI Error: " + error.response.data.error?.message || JSON.stringify(error.response.data));
      } else if (error.request) {
        setResult("Backend unreachable. Please check backend URL or if it's running.");
      } else {
        setResult("Unexpected error: " + error.message);
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Security LLM Triage</h2>

      <input
        type="text"
        placeholder="Enter OpenAI API key"
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Backend URL (e.g. http://localhost:8000)"
        value={backendUrl}
        onChange={e => setBackendUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <textarea
        rows="5"
        placeholder="Paste your security finding here"
        value={finding}
        onChange={e => setFinding(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <button onClick={handleTriage}>Submit</button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>{result}</pre>
    </div>
  );
}

export default App;
