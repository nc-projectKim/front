import React, { Component } from 'react';
import PageTop from './PageTop';
import Entries from './Entries';

class Home extends Component {
    render() {
        return (
            <div>
                <PageTop />
                <Entries/>
            </div>
        );
    }
}
export default Home;