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

  return (
    <main>
      <h1>Stellar Sailing</h1>
      {      
        privateCompanies.map((company, index) => (
          <div key={index}>
            <h2>Name: {company.name}</h2>
            <h4>Price: ${company.price}</h4>
            <h4>Available seats: {company.seats}</h4>
            <p>Description: {company.desc}</p>
          </div>
        ))
      }
      {
        agencies.map((agency, index) => (
          <div key={index}>
            <h2>Name: {agency.name}</h2>
            <h4>Price: ${agency.price}</h4>
            <h4>Available seats: {agency.seats}</h4>
            <p>Description: {agency.desc}</p>
        </div>
        ))
      }
    </main>
  );
}

export default App;
