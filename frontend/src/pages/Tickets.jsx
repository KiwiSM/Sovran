import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { buyTicket, removeTicket } from "../actions/priceAction";
import { addOperator, removeOperator } from "../actions/operatorAction";

export default function Tickets() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    
    const price = useSelector(state => state.priceReducer)

    function addPrice() {
        dispatch(buyTicket(location.state.price));
    }
    function removePrice() {
        dispatch(removeTicket(location.state.price));
    }
    function add() {
        dispatch(addOperator(location.state))
    }

    return (
            <div>
                <h2>Name: {location.state.name}</h2>
                <h4>Price: ${location.state.price}</h4>
                <button onClick={addPrice}>PLUS +</button>
                <button onClick={removePrice}>MINUS -</button>
                <h4>Available seats: {location.state.seats}</h4>
                <p>Description: {location.state.desc}</p>
                <h4>Total price: ${price}</h4>
                <button onClick={add}>Submit to cart</button>
                <button onClick={() => navigate("/cart")} >Go to cart</button>
            </div>
    )
}