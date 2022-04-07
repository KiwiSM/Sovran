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

    const [description, setDescription] = useState(false);

    function readMore() {
        setDescription(!description);
    }

    return (
        <main>
            <section className={styles.section}>
            { companies.companies ?
                privateCompanies.map((company, index) => (
                    <div key={index} className={styles.div}>
                        <h2>{company.name}</h2>
                        <img src={company.url} alt="" />
                        <h4>Price: ${company.price}</h4>
                        <h4>Available seats: {company.seats}</h4>
                        <Link 
                        to="/tickets"
                        state={company}
                        key={index}>
                        <button className={styles.button}>Buy</button>
                        </Link>
                        {   
                            description ? (<p className='description'>{company.desc}</p>) : null
                        }
                    </div>
                )) : null
            }
            { companies.agencies ? 
                agencies.map((agency, index) => (
                    <div key={index} className={styles.div}>
                        <h2>{agency.name}</h2>
                        <img src={agency.url} alt="" />
                        <h4>Price: ${agency.price}</h4>
                        <h4>Available seats: {agency.seats}</h4>
                        <Link 
                        to="/tickets"
                        state={agency}
                        key={index}>
                        <button className={styles.button}>Buy</button>
                        </Link>
                        {   
                            description ? (<p className='description'>{agency.desc}</p>) : null
                        }
                    </div>
                )) : null
            }
            </section>
            <button className={styles.readMore} onClick={readMore}>Read more</button>
        </main>
    )
}