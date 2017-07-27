import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './css/Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class KimNavbar extends Component {
    render () {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/'}>
                                <img className="img-st" src={require('../../public/logo.png')} />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {
                                this.props.user 
                                ? <Button className='btn btn-primary logout-btn' onClick={this.props.logOut}>Logout</Button>
                                : <Button className='btn btn-primary logout-btn' onClick={this.props.loginWithFacebook}>Login with Facebook</Button>
                            }
                        </Nav>
                        {/* <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>*/}
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default KimNavbar;

Navbar.propTypes = {
    user: PropTypes.any,
    logOut: PropTypes.any,
    loginWithFacebook: PropTypes.any
};