import React, { Component } from 'react';
import ExpensesRowTitle from './ExpensesRowTitle';
import ExpenseCard from './ExpenseCard';
import ExpensesPanelButtons from './ExpensesPanelButtons';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './css/ExpensesList.css';

class FilteredExpensesList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const editExpense = this.props.editExpense;
        return (
            <div>
                 <div>
                        <div className='panel panel-default'>
                            <div className="expenses-search">
                                <h3 className="panel-title">Search results</h3>
                                <Link to="/expenses/search" ><button type="button"
                                    className="btn btn-default expenses-buttons">Change Search</button>
                                </Link>
                            </div>

                            <div className="panel-body">
                                <div className="container">
                                    <ExpensesRowTitle />
                                    {map(this.props.filteredExpenses, function (expense, key) {
                                        return (
                                            <ExpenseCard 
                                            iD={key} 
                                            key={expense.created} 
                                            editExpense={editExpense} 
                                            expense={expense} />
                                        );
                                    })}
                                    <ExpensesPanelButtons
                                        viewMore={this.props.viewMore} />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default FilteredExpensesList;

FilteredExpensesList.propTypes = {
    filteredExpenses: PropTypes.object.isRequired,
    viewMore: PropTypes.func.isRequired,
};