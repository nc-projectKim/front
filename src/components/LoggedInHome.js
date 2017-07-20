import React, { Component } from 'react';
import Entries from './Entries';
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