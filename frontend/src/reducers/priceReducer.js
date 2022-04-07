import { totalPrice } from "../globalStore";

const priceReducer = (state = totalPrice, action) => {
    switch(action.type) {
        case "BUY_TICKET": 
            return state + action.payload
        case "REMOVE_TICKET":
            return state - action.payload
        case "RESET_PRICE":
            return 0
        default: 
            return state
    }
}

export default priceReducer;