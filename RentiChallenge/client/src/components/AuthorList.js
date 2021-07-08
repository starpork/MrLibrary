import React from 'react'
import PropTypes from 'prop-types'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { useEffect } from 'react';
import 'redux-thunk';
//import { v4 as uuidv4 } from 'uuid'; 
//import { connect } from 'react-redux';
import { useSelector, useDispatch, useCallback } from 'react-redux';
import {getAuthors, getAllAuthors} from '../actions/authorActions'
import './BookList.css'
var parse = require('html-react-parser');

const AuthorList = props => {
     const dispatch = useDispatch();

    /*useEffect(() => {
        dispatch(getAllAuthors())
    }, []);  */ 

  
    

   // const author = useSelector(state => state.author);
    const author = useSelector(state => state.author);

    
      
    return (
        <Container>            
            <ListGroup>
                <TransitionGroup className="authorList">
                    {author.authors.map(({_id, title, biography}) => (
                        
                      <CSSTransition key={_id} classNames="fade" timeout={500}>
                          <ListGroupItem>
                            
                            <p className="search-result-heading">{title}</p>
                            <hr></hr>
                            <p dangerouslySetInnerHTML={{__html: biography}}></p>
                            
                          </ListGroupItem>                        
                      </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}



AuthorList.propTypes = {
}
//const mapStateToProps = (state) => ({
    //item: state.item
//})
export default AuthorList;
