import React, { useState } from "react";

function App() {
  const [eps, setEps] = useState('');
  const [roe, setRoe] = useState('');
  const [growth, setGrowth] = useState('');
  const [debt, setDebt] = useState('');
  const [payout, setPayout] = useState('');
  const [result, setResult] = useState('');

  const checkStock = () => {
    let score = 0;

    if (parseFloat(roe) >= 15) score++;
    if (parseFloat(growth) >= 10) score++;
    if (parseFloat(debt) <= 1) score++;
    if (parseFloat(payout) <= 50) score++;

    if (score >= 3) {
      setResult("✅ Likely Compounder");
    } else {
      setResult("❌ Not Ideal for Compounding");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "400px", margin: "auto" }}>
      <h2>🧮 Compounder Stock Checker by Manohar Mazumdar</h2>
      <input placeholder="EPS" value={eps} onChange={e => setEps(e.target.value)} /><br /><br />
      <input placeholder="ROE (%)" value={roe} onChange={e => setRoe(e.target.value)} /><br /><br />
      <input placeholder="Profit Growth (%)" value={growth} onChange={e => setGrowth(e.target.value)} /><br /><br />
      <input placeholder="Debt-to-Equity" value={debt} onChange={e => setDebt(e.target.value)} /><br /><br />
      <input placeholder="Dividend Payout (%)" value={payout} onChange={e => setPayout(e.target.value)} /><br /><br />
      <button onClick={checkStock}>Check</button>
      <h3 style={{ marginTop: "20px" }}>{result}</h3>
    </div>
  );
}

export default App;
