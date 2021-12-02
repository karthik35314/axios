import { combineReducers } from "redux";
import postReducer from "./postReducer";



const rootReducer = combineReducers({
     allUsers:postReducer
         });

export default rootReducer