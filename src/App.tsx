import { useState } from "react";

type HealthResponse = { ok: boolean };

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function checkBackend() {
    setError(null);
    setHealth(null);

    try {
      const res = await fetch("/api/health"); // <-- proxied to http://localhost:5174/api/health
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data: HealthResponse = await res.json();
      setHealth(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Meal Prep App</h1>

      <button onClick={checkBackend}>Check backend</button>

      {health && <p>Backend says ok: {String(health.ok)} ✅</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
    </div>
  );
}