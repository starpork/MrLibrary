import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'reactstrap';
import { logout } from '../../actions/authActions';
import { clearAuthors } from '../../actions/authorActions';
import { useDispatch } from 'react-redux';


const Logout = props => {
    const dispatch = useDispatch();
    const doLogout = () => {
        dispatch(logout())
    }

    return (
        <Fragment>
            <NavLink onClick={doLogout} href="#">
                Logout
            </NavLink>
        </Fragment>
    )
}

Logout.propTypes = {

}

export default Logout
