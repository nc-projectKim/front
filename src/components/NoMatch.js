import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class NoMatch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    render () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>/4 0 4/</h1>
                    <p>Can't Find The Page Requested</p>
                    <p><Link to="/"><button className="btn btn-danger">Go Back</button></Link></p>
                </div>
            </div>
        );
    }
}
export default NoMatch;