import { useEffect, useState } from "react";

const API_BASE = "/api";

function formatBoolean(value) {
  return value ? "Yes" : "No";
}

function App() {
  const [traffic, setTraffic] = useState(null);
  const [signal, setSignal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    refreshData();
  }, []);

  async function fetchTraffic() {
    const response = await fetch(`${API_BASE}/traffic/analyze`);
    if (!response.ok) throw new Error("Traffic API failed");
    return response.json();
  }

  async function fetchSignal() {
    const response = await fetch(`${API_BASE}/signals/`);
    if (!response.ok) throw new Error("Signals API failed");
    return response.json();
  }

  async function refreshData() {
    setLoading(true);
    setError(null);

    try {
      const [trafficData, signalData] = await Promise.all([
        fetchTraffic(),
        fetchSignal(),
      ]);
      setTraffic(trafficData);
      setSignal(signalData);
    } catch (err) {
      setError(err.message || "Unable to load data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <header className="page-header">
        <div>
          <h1>Smart Traffic Management</h1>
          <p>Realtime traffic analysis and signal status.</p>
        </div>
        <button onClick={refreshData} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </header>

      {error && <div className="error-box">{error}</div>}

      <section className="card">
        <h2>Traffic Analysis</h2>
        {traffic ? (
          <div className="grid">
            <div className="data-row">
              <span>Cars</span>
              <strong>{traffic.vehicles.cars}</strong>
            </div>
            <div className="data-row">
              <span>Bikes</span>
              <strong>{traffic.vehicles.bikes}</strong>
            </div>
            <div className="data-row">
              <span>Trucks</span>
              <strong>{traffic.vehicles.trucks}</strong>
            </div>
            <div className="data-row">
              <span>Total</span>
              <strong>{traffic.analysis.total}</strong>
            </div>
            <div className="data-row">
              <span>Density</span>
              <strong>{traffic.analysis.density}</strong>
            </div>
          </div>
        ) : (
          <p>Loading traffic data...</p>
        )}
      </section>

      <section className="card">
        <h2>Signal Status</h2>
        {signal ? (
          <div className="grid">
            <div className="data-row">
              <span>Signal</span>
              <strong>{signal.signal}</strong>
            </div>
            <div className="data-row">
              <span>Density</span>
              <strong>{signal.density}</strong>
            </div>
            <div className="data-row">
              <span>Emergency</span>
              <strong>{formatBoolean(signal.emergency)}</strong>
            </div>
            <div className="data-row">
              <span>Cars</span>
              <strong>{signal.vehicles.cars}</strong>
            </div>
            <div className="data-row">
              <span>Bikes</span>
              <strong>{signal.vehicles.bikes}</strong>
            </div>
            <div className="data-row">
              <span>Trucks</span>
              <strong>{signal.vehicles.trucks}</strong>
            </div>
          </div>
        ) : (
          <p>Loading signal data...</p>
        )}
      </section>
    </div>
  );
}

export default App;
