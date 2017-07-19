import React, { Component } from 'react';
import ActionButtons from './ActionButtons';
import './css/PageTop.css';
import { Tabs, Tab } from 'react-bootstrap';
import Entries from './Entries';
import Notes from './Notes';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import './css/PageTabs.css';

class PageTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    render() {
        return (
            <div className='navTabs'>
                <NavLink activeClassName='selected' className='navlink' to={'/welcome'}>
                    Home
                </NavLink>
                <NavLink activeClassName='selected' className='navlink' to={'#'}>
                    Expenses
                </NavLink>
                <NavLink activeClassName='selected' className='navlink' to={'#'}>
                    Billing
                </NavLink>
                <NavLink activeClassName='selected' className='navlink' to={'/notes'}>
                    Notes
                </NavLink>
            </div>
        );
    }
    handleSelect(key) {
        this.setState({ activeTab: key });
    }
}
export default PageTabs;
