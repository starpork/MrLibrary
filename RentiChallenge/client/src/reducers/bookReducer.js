import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING, UPDATE_BOOK, CLEAR_BOOKS } from '../actions/types'

const initialState = {
    books: [],
    loading: false
}

export default function(state = initialState, action)  
{
    switch(action.type) {
        case GET_BOOKS:
            console.log("GET_BOOKS");
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        case DELETE_BOOK:
            console.log("DELETE_ITEM");
            return {
                ...state,
                books: state.books.filter(item => item._id !== action.payload)
            }
        case ADD_BOOK:
            console.log("ADD_ITEM");
            return {
                ...state, books: [action.payload, ...state.books]
            }
        case BOOKS_LOADING:
            console.log("ITEMS_LOADING");
            return {
                ...state, loading: true
        }
        case CLEAR_BOOKS:
            console.log("CLEAR_BOOKS");
            return initialState
        case UPDATE_BOOK:
            console.log("UPDATE_BOOK");
            return {
                ...state //need to set to update current book ie ...state, items: [action.payload, ...state.items]
        }
            
        default:            
            console.log("LOLeqwLO");
            return state;
    }    
    
}