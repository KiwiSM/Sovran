import styles from './Operators.module.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";;

export default function Operators() {
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
        <main className={styles.main}>
            <h1>This is from Operators</h1>
            { companies.companies ?
                privateCompanies.map((company, index) => (
                    <Link
                    to="/tickets"
                    state={company}
                    key={index}>
                    <div className={styles.div}>
                        <h2>Name: {company.name}</h2>
                        <h4>Price: ${company.price}</h4>
                        <h4>Available seats: {company.seats}</h4>
{/*                         <p>Description: {company.desc}</p> */}
                    </div>
                    </Link>
                )) : null
            }
            { companies.agencies ? 
                agencies.map((agency, index) => (
                    <Link 
                    to="/tickets"
                    state={agency}
                    key={index}>
                    <div className={styles.div}>
                        <h2>Name: {agency.name}</h2>
                        <h4>Price: ${agency.price}</h4>
                        <h4>Available seats: {agency.seats}</h4>
                        <p>Description: {agency.desc}</p>
                    </div>
                    </Link>
                )) : null
            }
        </main>
    )
}