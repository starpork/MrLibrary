import React from 'react'
import PropTypes from 'prop-types'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { useEffect, useRef } from 'react';
import 'redux-thunk';
//import { v4 as uuidv4 } from 'uuid'; 
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {getBooks, searchBooks, deleteBook, updateBook} from '../actions/itemActions'
import './BookList.css'
var parse = require('html-react-parser');

const BookList = props => {
     const dispatch = useDispatch();

    //useEffect(() => {
        //dispatch(getItems())
        //dispatch(getItems())
    //}, []);   


  
  
    

  const book = useSelector(state => state.book);
    return (
        <Container>            
            <ListGroup>
                <TransitionGroup className="bookList">
                    {book.books.map(({_id, title, author, publisher, synopsis}) => (
                        
                      <CSSTransition key={_id} classNames="fade" timeout={500}>
                          <ListGroupItem>
                            
                            <p className="search-result-heading">{title}</p>
                            <p className="search-result-subheading">{author}</p>
                            <p>{publisher}</p>
                            <hr></hr>
                            <p dangerouslySetInnerHTML={{__html: synopsis}}></p>
                            
                          </ListGroupItem>                        
                      </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

/*<Button className="remove-btn" color="danger" size="sm" onClick={() => {
        dispatch(deleteItem(_id))}}>
    &times;
</Button>*/

BookList.propTypes = {
}
//const mapStateToProps = (state) => ({
    //item: state.item
//})
export default BookList;
