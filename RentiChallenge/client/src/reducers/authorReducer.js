import { GET_AUTHORS, AUTHORS_LOADING, CLEAR_AUTHORS } from '../actions/types'

const initialState = {
    authors: [],
    loading: false
}

export default function(state = initialState, action)  
{
    switch(action.type) {
        case GET_AUTHORS:
            console.log("GET_AUTHORS");
            return {
                ...state,
                authors: action.payload,
                loading: false
            }       
        case AUTHORS_LOADING:
            console.log("AUTHORS_LOADING");
            return {
                ...state, loading: true
        }   
        case CLEAR_AUTHORS:
            console.log("CLEAR_AUTHORS");
            return initialState    
        default:            
            console.log("DEFAULT");
            return state;
    }    
    
}