import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

//Root reducer combines all other states together


export default combineReducers({
    user: userReducer
});