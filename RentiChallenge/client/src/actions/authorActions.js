import axios from 'axios';
import { GET_AUTHORS, AUTHORS_LOADING, CLEAR_AUTHORS, GET_ALLAUTHORS} from "./types";
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
export const getAllAuthors = () => dispatch => {
    dispatch(setAuthorsLoading())
    axios
    .get('/api/authors/')
    .then(res => 
        dispatch({
            type: GET_ALLAUTHORS,
            payload: res.data
        })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}
export const searchAuthors = (searchterm) => (dispatch, getState) => {
    dispatch(setAuthorsLoading())
    axios
    .get(`/api/authors/${searchterm}`, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: GET_AUTHORS,
            payload: res.data
        })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
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