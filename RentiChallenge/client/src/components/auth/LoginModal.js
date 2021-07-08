import React, {Component, useEffect, useState, useCallback, useRef} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import '../ItemModal.css';
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions';
import { login } from '../../actions/authActions';

import PropTypes from 'prop-types'

const LoginModal = props => {

    const[modalState,setModalState] = useState({modal: false, name: '', email: '', password: '', msg: null});

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const error = useSelector(state => state.error);

    

    const dispatch = useDispatch();
    
    const onChange = (e) => {
        setModalState(prevModalState => ({
            ...prevModalState, 
            [e.target.name]: e.target.value
        }))
    }
    
    
    const toggle = () => {
        dispatch(clearErrors());
        setModalState(prevModalState => ({
            ...prevModalState, 
            modal: !prevModalState.modal
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const {email, password} = modalState

        const user = {
            email,
            password
        }
        
         //Attempt to login
         dispatch(login(user));  
               
    }

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const previousModal = usePrevious(modalState);

    useEffect(() => {
            if(error.id === 'LOGIN_FAIL'){
                console.log(error) 
                setModalState(prevModalState => ({
                    ...prevModalState, 
                    msg: error.msg.msg
                }))
            }
            else{
                setModalState(prevModalState => ({
                    ...prevModalState, 
                    msg: null
                }))
            }

        
        
    },[error]);

    useEffect(() => {
        if(modalState.modal)// === previousModal.modal)
            if(isAuthenticated)
                toggle()
    },[isAuthenticated])

    return (
        <div>
            <NavLink href="#" onClick={toggle}>
                Login           
            </NavLink>
            <Modal
             isOpen={modalState.modal}
             toggle={toggle}
             >
                 <ModalHeader toggle={toggle}>                                
                    Login
                        
                 </ModalHeader>
                 <ModalBody>
                     { modalState.msg ? <Alert color="danger">{modalState.msg}</Alert> : null} 
                     <Form onSubmit={onSubmit}>
                         <FormGroup className="register-form">

                            <Label for="email"> Email </Label>                             
                            <Input type="email" name="email" id="email" placeholder="Email" onChange={onChange}></Input> 

                            <Label for="password"> Password </Label>                             
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={onChange}></Input> 
                                                       
                            
                            <Button color="success" style={{marginTop: '2rem', width: '100%' }} type="submit" block>
                                Login
                            </Button>
                         </FormGroup>
                     </Form>
                 </ModalBody>
            </Modal>
        </div>
    )
}



export default LoginModal
