import React, { Component } from 'react';
import './css/ExpenseCard.css';

class ExpensesRowTitle extends Component {
    render () {
        return (
            <div className="container-fluid component-ExpenseCard rowHeader">
                <div className="col-xs-2"><div>Date</div>
                    <div>(Time)</div>
                </div>
                <div className="col-xs-2">Amount</div>
                <div className="col-xs-4">Charge To</div>
                <div className="col-xs-2">Have Receipt?</div>
                <div className="col-xs-1">View</div>
                <div className="col-xs-1">Edit</div>

            </div>
        );
    }
}
export default ExpensesRowTitle;