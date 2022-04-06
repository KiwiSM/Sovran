import { amount } from "../globalStore";

const amountReducer = (state = amount, action) => {
    switch(action.type) {
        case "RAISE_AMOUNT": 
            return state + 1
        case "LOWER_AMOUNT":
            return state - 1
        default: 
            return state
    }
}

export default amountReducer;