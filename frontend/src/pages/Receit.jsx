import styles from "./Receit.module.css"
import { useSelector } from "react-redux";

export default function Receit() {
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
                    <h4>Receit number: {Math.floor(Math.random() * 1000000000)}</h4>
                </div>
            ))
        }
        <h4 className={styles.price}>Total price: ${totalPrice}</h4>
    </div>
    )
}