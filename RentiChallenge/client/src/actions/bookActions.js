import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING, UPDATE_BOOK, CLEAR_BOOKS } from "./types";
export const getBooks = () => dispatch => {
    dispatch(setBooksLoading())
    axios
    .get('/api/books/')
    .then(res => 
        dispatch({
            type: GET_BOOKS,
            payload: res.data
        })
    )
}
export const searchBooks = (searchterm) => dispatch => {
    dispatch(setBooksLoading())
    axios
    .get(`/api/books/${searchterm}`)
    .then(res => 
        dispatch({
            type: GET_BOOKS,
            payload: res.data
        })
    )
}
export const deleteBook = (id) => dispatch => {
    axios.delete(`/api/books/${id}`).then(res =>
        dispatch({
            type: DELETE_BOOK,
            payload: id
        }))
}
export const addBook = (item) =>  dispatch =>{
    axios
        .post('/api/books', item)
        .then(res => 
            dispatch({
                type: ADD_BOOK,
                payload: res.data 
            })
        )    
}
export const updateBook = (item) =>  dispatch =>{
    axios
        .put('/api/books', item)
        .then(res => 
            dispatch({
                type: UPDATE_BOOK,
                payload: res.data 
            })
        )    
}

export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    }
}

export const clearBooks = () => {
    return {
        type: CLEAR_BOOKS
    }
}