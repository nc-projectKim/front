import React, { Component } from 'react';
import ExpensesRowTitle from './ExpensesRowTitle';
import ExpenseCard from './ExpenseCard';
import ExpensesPanelButtons from './ExpensesPanelButtons';
// import NotesPanelButtonsMinimised from './NotesPanelButtonsMinimised';
import { map } from 'underscore';
import PropTypes from 'prop-types';
// import AddExpense from './AddNote';
import './css/ExpensesList.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import alterValuesExpenses from './component-utilities/alterValuesExpenses';

class ExpensesPageExpensesList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const editExpense = this.props.editExpense;
        const alteredValues = alterValuesExpenses(this.props.expenses);
        return (
            <div>
                    <div className='panel panel-default'>
                        <div className="expenses">

                            <span>
                                <h3 className="panel-title"><span>{this.props.heading}</span></h3>
                                <Link to="/expenses/search" ><button type="button"
                                    className="btn btn-default expenses-buttons srch-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                                </Link>
                            </span>
                        </div>

                        <div className="panel-body">
                            <div className="container">
                                <ExpensesRowTitle />
                                {map(alteredValues, function (expense) {
                                    return (
                                        <ExpenseCard id={expense[0]} 
                                        key={expense[1].created} 
                                        expense={expense[1]} 
                                        editExpense={editExpense} />
                                    );
                                })}
                                <ExpensesPanelButtons
                                    /* addNewExpense={this.props.addNewExpense}*/
                                    viewMore={this.viewMore} 
                                    expenses={this.props.expenses}
                                    />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}


export default ExpensesPageExpensesList;

ExpensesPageExpensesList.propTypes = {
    add: PropTypes.bool.isRequired,
    // addNewExpense: PropTypes.func.isRequired,
    expenses: PropTypes.object.isRequired,
    editExpense: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    // submitExpense: PropTypes.func.isRequired,
    newSubmit: PropTypes.bool.isRequired
};