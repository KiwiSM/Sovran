import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
    const navigate = useNavigate();
    const operator = useSelector(state => state.operatorReducer)
    
    console.log(operator);
    let totalPrice = 0;

    operator.map((company) => {
        return totalPrice += company.operator.price * company.amount
    });

    return (
        <div>
            {
                operator.map((company, index) => (
                    <div key={index}>
                        <h1>{company.operator.name}</h1>
{/*                         <h1>{company.operator.desc}</h1> */}
                        <h2>{company.operator.price}</h2>
                        <h4>{company.amount}</h4>
                        <button>PLUS</button>
                        <button>MINUS</button>
                    </div>
                ))
            }
            <h4>{totalPrice}</h4>
            <button onClick={() => navigate("/receit")}>Pay up</button>
        </div>
    )
}