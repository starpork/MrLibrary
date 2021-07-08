import { GET_AUTHORS, AUTHORS_LOADING, CLEAR_AUTHORS, GET_ALLAUTHORS } from '../actions/types'

const initialState = {
    authors: [],
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action)  
{
    switch(action.type) {
        case GET_ALLAUTHORS:
            return {
                ...state,
                authors: action.payload,
                loading: false
            }
        case GET_AUTHORS:
            return {
                ...state,
                authors: action.payload,
                loading: false
            }       
        case AUTHORS_LOADING:
            return {
                ...state, loading: true
        }   
        case CLEAR_AUTHORS:
            return initialState    
        default:   
        console.log("DEFAULT auth")         
            return state;
    }    
    
}