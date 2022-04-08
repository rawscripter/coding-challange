import { combineReducers } from "redux";
import logReducer from "./chatReducer";
import userReducer from "./userReducer";
export default combineReducers({
    // reducers
    chat: logReducer,
    user: userReducer
});