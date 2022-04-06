import { combineReducers } from "redux";
import operatorReducer from "./operatorReducer";
import priceReducer from "./priceReducer";
import amountReducer from "./amountReducer";

const rootReducer = combineReducers({
    operatorReducer,
    priceReducer,
    amountReducer
});

export default rootReducer;