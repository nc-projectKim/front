import React, { Component } from 'react';
import './css/NoteCard.css';


class NoteRowTitle extends Component {
    render () {
        return (
            <div className="container-fluid component-NoteCard rowHeader">
                <div className="col-xs-2"><div>Date</div>
                <div>(Time)</div>
                </div>
                <div className="col-xs-6">Note</div>
                <div className="col-xs-2">Tags</div>
                <div className="col-xs-1">View</div>
                <div className="col-xs-1">Edit</div>
                
            </div>
        );
    }
}
export default NoteRowTitle;