import styles from "./Cart.module.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
    const navigate = useNavigate();
    const operator = useSelector(state => state.operatorReducer)
    
    let totalPrice = 0;

    operator.map((company) => {
        return totalPrice += company.operator.price * company.amount
    });

    return (
        <div>
            {
                operator.map((company, index) => (
                    <div className={styles.div} key={index}>
                        <h2>{company.operator.name}</h2>
                        <h4>Price per ticket: ${company.operator.price}</h4>
                        <h4>Number of tickets: {company.amount}</h4>
                    </div>
                ))
            }
            <h4>Total price: ${totalPrice}</h4>
            <button className={styles.toReceit} onClick={() => navigate("/receit")}>Submit payment</button>
        </div>
    )
}