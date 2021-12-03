import { combineReducers } from "redux";
import postReducer from "./postReducer";
import getReducer from "./getReducer";
import delReducer from "./delReducer";



const rootReducer = combineReducers({
     allUsers:postReducer,
     getusers:getReducer,
     delusers:delReducer
         });

export default rootReducer