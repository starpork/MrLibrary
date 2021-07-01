import { combineReducers } from "redux";
import itemReducer from './itemReducer';
import bookReducer from "./bookReducer";
import authorReducer from "./authorReducer";

export default combineReducers({
    item: itemReducer,
    book: bookReducer,    
    author: authorReducer,    
});