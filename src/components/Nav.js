import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {Link} from 'gatsby';


export default class Navigation extends Component {
    constructor(props){
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div className="container-fluid" id="top-bar" style={{ zIndex: 100 }}>
                <Navbar color="" light expand="md" className="container">
                    <NavbarBrand tag={Link} to="/"><img height="60px" src="https://cdn.buttercms.com/7mH7wJLQjGoFpk26uv2C" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} className="nav-link" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" target="_blank" href="http://www.sunrichtech.com.hk/Products.aspx">Products</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="nav-link" to="/support">Support</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="nav-link" to="/contact">Contact</NavLink>
                                </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}