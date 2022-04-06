import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
    const navigate = useNavigate();
    const operator = useSelector(state => state.operatorReducer)
    console.log(operator);

    return (
        <div>
            <h1>This is from Cart</h1>
            <h2>Name: {operator.name}</h2>
            <h4>Price: ${operator.price}</h4>
            <h4>Available seats: {operator.seats}</h4>
            <p>Description: {operator.desc}</p>
            <button onClick={() => navigate("/receit")}>Pay up</button>
        </div>
    )
}