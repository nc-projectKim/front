 import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class ExpenseHasBeenEdited extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <p>Your expense has been edited</p>
                    <p><Link to="/expenses"><button className="btn btn-primary">Return to Expenses</button></Link></p>
                    <p><Link to="/welcome"><button className="btn btn-primary">Retern to Home Page</button></Link></p>

                </div>
            </div>
        );
    }
}
export default ExpenseHasBeenEdited;