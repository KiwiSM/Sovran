import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
    const navigate = useNavigate();
    const operator = useSelector(state => state.operatorReducer)
    console.log(operator);

    return (
        <div>
            {
                operator.map((company, index) => (
                    <div key={index}>
                        <h1>{company.name}</h1>
                        <h1>{company.desc}</h1>
                    </div>
                ))
            }
            <button onClick={() => navigate("/receit")}>Pay up</button>
        </div>
    )
}