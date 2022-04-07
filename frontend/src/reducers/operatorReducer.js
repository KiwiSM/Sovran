import { operator } from "../globalStore";

const operatorReducer = (state = operator, action) => {
    switch(action.type) {
        case "ADD_OPERATOR":
            return [...state, {
                    operator: action.payload,
                    amount: action.number
                }]
        default: 
            return state
    }
}

export default operatorReducer;