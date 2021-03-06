 import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class DeleteExpense extends Component {
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
                    <p>Your expense has been deleted</p>
                    <p><Link to="/expenses"><button className="btn btn-primary">Return to Notes</button></Link></p>
                    <p><Link to="/welcome"><button className="btn btn-primary">Retern to Home Page</button></Link></p>

                </div>
            </div>
        );
    }
}
export default DeleteExpense;