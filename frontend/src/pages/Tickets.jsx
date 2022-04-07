import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { buyTicket, removeTicket } from "../actions/priceAction";
import { addOperator } from "../actions/operatorAction";
import { raiseAmount, lowerAmount } from "../actions/amountAction";

export default function Tickets() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const price = useSelector(state => state.priceReducer)
    const amount = useSelector(state => state.amountReducer);
    console.log(amount);

    function addPrice() {
        dispatch(buyTicket(location.state.price));
        dispatch(raiseAmount());
    }
    function removePrice() {
        dispatch(removeTicket(location.state.price));
        dispatch(lowerAmount());
    }
    function add() {
        dispatch(addOperator(location.state, amount))
    }

    return (
            <div>
                <h2>Name: {location.state.name}</h2>
                <h4>Price: ${location.state.price}</h4>
                <h4>Amount: {location.state.amount}</h4>
                <button onClick={addPrice}>PLUS +</button>
                <button onClick={removePrice}>MINUS -</button>
                <p>{amount}</p>
                <h4>Available seats: {location.state.seats}</h4>
                <p>Description: {location.state.desc}</p>
                <h4>Total price: ${price}</h4>
                <button onClick={add}>Submit to cart</button>
                <button onClick={() => navigate("/cart")} >Go to cart</button>
            </div>
    )
}