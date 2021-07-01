import axios from 'axios';
import { GET_AUTHORS, AUTHORS_LOADING, CLEAR_AUTHORS} from "./types";
export const getAuthors = () => dispatch => {
    dispatch(setAuthorsLoading())
    axios
    .get('/api/authors/')
    .then(res => 
        dispatch({
            type: GET_AUTHORS,
            payload: res.data
        })
    )
}
export const searchAuthors = (searchterm) => dispatch => {
    dispatch(setAuthorsLoading())
    axios
    .get(`/api/authors/${searchterm}`)
    .then(res => 
        dispatch({
            type: GET_AUTHORS,
            payload: res.data
        })
    )
}

export const setAuthorsLoading = () => {
    return {
        type: AUTHORS_LOADING
    }
}

export const clearAuthors = () => {
    return {
        type: CLEAR_AUTHORS
    }
}