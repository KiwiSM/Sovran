import styles from "./Tickets.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { buyTicket, removeTicket, resetPrice } from "../actions/priceAction";
import { addOperator } from "../actions/operatorAction";
import { raiseAmount, lowerAmount, resetAmount } from "../actions/amountAction";

export default function Tickets() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const price = useSelector(state => state.priceReducer)
    const amount = useSelector(state => state.amountReducer);

    function addPrice() {
        dispatch(buyTicket(location.state.price));
        dispatch(raiseAmount());
    }
    function removePrice() {
        dispatch(removeTicket(location.state.price));
        dispatch(lowerAmount());
    }
    function add() {
        dispatch(addOperator(location.state, amount));
        dispatch(resetAmount());
        dispatch(resetPrice());
    }

    return (
            <div className={styles.div}>
                <h2>{location.state.name}</h2>
                <h4>Price: ${location.state.price}</h4>
                <h4>Number of tickets: {location.state.amount}</h4>
                <div className={styles.container}>
                    <button className={styles.button} onClick={addPrice}>+</button>
                    <p className={styles.p}>{amount}</p>
                    <button className={styles.button} onClick={removePrice}>-</button>
                </div>
                <h4>Total price: ${price}</h4>
                <div className={styles.container}>
                    <button className={styles.toCart} onClick={add}>Submit to cart</button>
                    <button className={styles.toCart} onClick={() => navigate("/cart")} >Go to cart</button>
                </div>
            </div>
    )
}