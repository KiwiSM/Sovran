import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [companies, setCompanies] = useState([]);
  const url = "http://localhost:5000/api"
  useEffect(() => {
    fetch(url, {
      method: "GET",
      mode: "no-cors"
    })
    .then(result => result.json())
    .then(data => setCompanies(data))
  })

  return (
    <main>
      <h1>Stellar Sailing</h1>
    </main>
  );
}

export default App;
