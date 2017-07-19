import React, { Component } from 'react';
import PageTop from './PageTop';
import Entries from './Entries';
import PageTabs from './PageTabs';
import './css/Home.css';

class LoggedInHome extends Component {
    render () {
        return (
            <div className='component-mainPage'>
                <Entries/>
            </div>
        );
    }
}
export default LoggedInHome;