import React, { Component } from 'react';
import './css/ExpenseCard.css';

class ExpensesRowTitle extends Component {
    render () {
        return (
<<<<<<< HEAD
            <div className="container-fluid component-ExpenseCard headers">
                <div className="col-xs-2"><div><strong>Date</strong></div>
=======
            <div className="container-fluid component-ExpenseCard">
                <div className="col-xs-2"><div>Date</div>
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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