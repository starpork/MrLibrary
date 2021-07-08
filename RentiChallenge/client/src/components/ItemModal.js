import React, {Component, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import './ItemModal.css';

import {addItem, searchItems} from '../actions/itemActions'
import {searchBooks, getBooks, clearBooks} from '../actions/bookActions'
import {searchAuthors, getAuthors, clearAuthors} from '../actions/authorActions'

import PropTypes from 'prop-types'

const ItemModal = props => {
    const[modalState,setModalState] = useState({modal: false, name: ''});

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    const dispatch = useDispatch();
    const onChange = (e) => {
        setModalState(prevModalState => ({
            ...prevModalState, 
            name: e.target.value
        }))
    }
    
    
    const toggle = () => {
        console.log(modalState)
        setModalState({modal: !modalState.modal, name: modalState.name})
    }

    const onSubmit = (e) => {

        if(props.collection === "books"){
            e.preventDefault();
            //dispatch(searchItems(modalState.name))searchBooks
            dispatch(searchBooks(modalState.name))
            dispatch(clearAuthors())

            toggle()
        }
        if(props.collection === "authors"){
            e.preventDefault();
            dispatch(searchAuthors(modalState.name))
            dispatch(clearBooks())

            toggle()
        }
        /*else{
            e.preventDefault();
            const newItem = {
            //    id: uuidv4(),
                name: modalState.name
            }
            dispatch(addItem(newItem))
            toggle()
        }*/
        
    }
    
    const authorSearchDisabled = !isAuthenticated && props.collection === 'authors';
    

    return (
        <div>
            {authorSearchDisabled && <h5  className="text-muted">Please Login to search Authors</h5>}
            <Button disabled={authorSearchDisabled ? true : false } className='search-button' color="dark" style={{marginBottom: '2rem'}} onClick={toggle}>
                {props.search ? "Search " + props.collection : 'Add item'}
            </Button>
            <Modal
             isOpen={modalState.modal}
             toggle={toggle}
             >
                 <ModalHeader toggle={toggle}>                                
                    {props.search ? 'Library Search' : 'Add To Shopping List'}
                        
                 </ModalHeader>
                 <ModalBody>
                     <Form onSubmit={onSubmit}>
                         <FormGroup>
                             <Label for="item"> {"Search " + props.collection}
                             </Label>
                             
                            <Input type="text" name="name" id="item" placeholder={props.collection + " name"} onChange={onChange}></Input> 
                                                       
                            
                            <Button color="success" style={{marginTop: '2rem' }} type="submit" block>
                                {props.search ? 'Search' : 'Add item'}
                            </Button>
                         </FormGroup>
                     </Form>
                 </ModalBody>
            </Modal>
        </div>
    )
}

ItemModal.propTypes = {

}

export default ItemModal
