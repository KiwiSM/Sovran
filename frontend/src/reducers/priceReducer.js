import { totalPrice } from "../globalStore";

const priceReducer = (money = totalPrice, action) => {
    switch(action.type) {
        case "BUY_TICKET": 
            return money + action.payload
        case "REMOVE_TICKET":
            return money - action.payload
        default: 
            return money
    }
}

export default priceReducer;