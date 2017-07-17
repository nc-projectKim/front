import React, { Component } from 'react';


class RowTitle extends Component {
    render() {
        return (
            <div className="container">
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
export default RowTitle;