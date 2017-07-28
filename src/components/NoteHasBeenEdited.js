 import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class NoteHasBeenEdited extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <p>Your note has been edited</p>
                    <p><Link to="/notes"><button className="btn btn-primary">Return to Notes</button></Link></p>
                    <p><Link to="/welcome"><button className="btn btn-primary">Retern to Home Page</button></Link></p>

                </div>
            </div>
        );
    }
}
export default NoteHasBeenEdited;