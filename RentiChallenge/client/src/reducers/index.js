import { combineReducers } from "redux";
import itemReducer from './itemReducer';
import bookReducer from "./bookReducer";
import authorReducer from "./authorReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";



export default combineReducers({
    item: itemReducer,
    book: bookReducer,    
    author: authorReducer,   
    error: errorReducer,    
    auth: authReducer,      
});