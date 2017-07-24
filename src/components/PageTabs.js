import React, { Component } from 'react';
import './css/PageTop.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './css/PageTabs.css';

class PageTabs extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    render () {
        return (
            <div className='navTabs'>
                <NavLink activeClassName='selected' className='navlink' to={'/welcome'}>
                    Home
                </NavLink>
                <NavLink activeClassName='selected' className='navlink' to={'/expenses'}>
                    Expenses
                </NavLink>
                <NavLink activeClassName='selected' className='navlink' to={'/billing'}>
                    Billing
                </NavLink>
                <NavLink activeClassName='selected' className='navlink' to={'/notes'}>
                    Notes
                </NavLink>
            </div>
        );
    }
    handleSelect (key) {
        this.setState({ activeTab: key });
    }
}
export default PageTabs;
