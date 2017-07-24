import React, { Component } from 'react';
// import './css/ExpenseCard.css';


class ExpensesRowTitle extends Component {
    render () {
        return (
            <div className="container-fluid component-ExpensesCard">
                <div className="col-xs-2"><div>Date</div>
                <div>(Time)</div>
                </div>
                <div className="col-xs-6">Expenses</div>
                <div className="col-xs-2">Tags</div>
                <div className="col-xs-1">View</div>
                <div className="col-xs-1">Edit</div>
                
            </div>
        );
    }
}
export default ExpensesRowTitle;