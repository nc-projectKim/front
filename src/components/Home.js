import React, { Component } from 'react';
import PageTop from './PageTop';
import Entries from './Entries';
import './css/Home.css';

class Home extends Component {
    render () {
        return (
            <div className='component-mainPage'>
                <PageTop />
                <Entries/>
            </div>
        );
    }
}
export default Home;