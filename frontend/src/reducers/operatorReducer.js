import { operator } from "../globalStore";

const operatorReducer = (state = operator, action) => {
    switch(action.type) {
        case "ADD_OPERATOR":
            return [...state, action.payload]
        default: 
            return state
    }
}

export default operatorReducer;