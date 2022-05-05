import counterReducer from "./counter";
import loggedReducer from "./login";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
});

export default rootReducer;