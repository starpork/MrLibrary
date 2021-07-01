import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarText
} from 'reactstrap';

const AppNavbar = ({title}) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => setIsOpen(!isOpen)

    return (<div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
        
            <Container>
                <NavbarBrand href="/">Mr Library</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                    <NavItem>
                        <NavLink href ="http://www.github.com" target="_blank">
                            Github
                        </NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>)
  }

/*class AppNavbar extends Component{
    constructor(props)
    {       
        super(props);
        //this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    /*toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href ="https//github.com">
                                Github
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}*/


export default AppNavbar;