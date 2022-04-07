import rocket from "../images/rocket-ship.svg"
import { Link } from "react-router-dom";

export default function Start() {
    return (
        <main>
            <h1 className='app-name'>Stellar sailing</h1>
            <h1>Click the rocket before it leaves</h1>
            <Link to="/order">
            <img className="rocket" src={rocket} alt="" />
            </Link>
        </main>
    )
}