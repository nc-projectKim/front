import React, { Component } from 'react';


class ActionButtons extends Component {
    render () {
        return (
            <div className="container">
                <div>
                    <button type="button" className="btn btn-danger">Add An Entry</button>
                    <button type="button" className="btn btn-warning">View My Expenses</button>
                    <button type="button" className="btn btn-success">View My Billing</button>
                    <button type="button" className="btn btn-info">View My Notes</button>
                </div>
            </div>
        );
    }
}
export default ActionButtons;