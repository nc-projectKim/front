import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
<<<<<<< HEAD
import './css/ExpensesList.css';
=======
import './css/NotesPanelButtons.css';
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
import PropTypes from 'prop-types';

import { CSVLink, CSVDownload } from 'react-csv';
import { map, each } from 'underscore';

const headers = ['expenseId', 'created', 'expenseDate', 'amount', 'currency', 'description', 'haveReceipt', 'chargeTo', 'lastEditTime'];

class ExpensesPanelButtons extends Component {
<<<<<<< HEAD
    render () {
=======
    render() {

>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        const expenses = this.props.expenses;
        const data = map(expenses, (x, key) => {
            const newArr = [];
            newArr.push(key);
            each(x, (y) => {
                newArr.push(y);
            });
            return newArr;
        });

        const jsonExp = JSON.stringify(this.props.expenses, null, '\t');

        return (
            <div className="row component-ExpensesPanelButtons">
                <button
                    onClick={this.props.viewMore}
                    type="button"
<<<<<<< HEAD
                    className="btn expenses-buttons collapse-btn"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                    &nbsp; Collapse
                    </button>

                <Link to={'/expenses/add'}><button type="button" className="btn expenses-buttons"><i className="fa fa-plus" aria-hidden="true"></i>
                    &nbsp; Add A Expense</button></Link>

                <Link to="/expenses"><button type="button" className="btn expenses-buttons view-more-notes-btn"><i className="fa fa-eye" aria-hidden="true"></i>
                    &nbsp; View More Expenses</button></Link>

                <button className="btn expenses-buttons">
                    <CSVLink className="expenses-buttons" data={data} header={headers}> Download CSV</CSVLink>
=======
                    className="btn btn-info collapse-btn"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                    &nbsp; Collapse
                    </button>

                <Link to={'/expenses/add'}><button type="button" className="btn btn-info"><i className="fa fa-plus" aria-hidden="true"></i>
                    &nbsp; Add A Expense</button></Link>

                <Link to="/expenses"><button type="button" className="btn btn-info view-more-notes-btn"><i className="fa fa-eye" aria-hidden="true"></i>
                    &nbsp; View More Expenses</button></Link>

                <button className="btn btn-info">
                    <CSVLink data={data} header={headers}> Download CSV</CSVLink>
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
                </button>
            </div>
        );
    }
}

export default ExpensesPanelButtons;

ExpensesPanelButtons.propTypes = {
    viewMore: PropTypes.func,
    // addNewNote: PropTypes.func.isRequired,
};