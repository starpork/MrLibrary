import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action)  
{
    switch(action.type) {
        case GET_ITEMS:
            console.log("GET_ITEMS");
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEM:
            console.log("DELETE_ITEM");
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            console.log("ADD_ITEM");
            return {
                ...state, items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            console.log("ITEMS_LOADING");
            return {
                ...state, loading: true
        }
            
        default:            
            console.log("LOLeqwLO");
            return state;
    }    
    
}

