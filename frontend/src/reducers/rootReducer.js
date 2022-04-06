import { combineReducers } from "redux";
import operatorReducer from "./operatorReducer";
import priceReducer from "./priceReducer";

const rootReducer = combineReducers({
    operatorReducer,
    priceReducer
});

export default rootReducer;