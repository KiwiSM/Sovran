import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [companies, setCompanies] = useState([]);
  const url = "http://localhost:5000/api"
  useEffect(() => {
    fetch(url)
    .then(result => result.json())
    .then(data => setCompanies(data.operators))
  }, [])

  const privateCompanies = companies.companies
  const agencies = companies.agencies;
  console.log(privateCompanies);

  return (
    <main>
      <h1>Stellar Sailing</h1>
{/*       {
        privateCompanies.map((company) => (
          <h1>{company.name}</h1>
        ))
      } */}
    </main>
  );
}

export default App;
