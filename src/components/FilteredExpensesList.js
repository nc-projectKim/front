import React, { Component } from 'react';
import ExpensesRowTitle from './ExpensesRowTitle';
import ExpenseCard from './ExpenseCard';
import ExpensesPanelButtons from './ExpensesPanelButtons';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class FilteredExpensesList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        // const editNote = this.props.editNote;
        return (
            <div>
                 <div>
                        <div className='panel panel-default'>
                            <div className="panel-heading">
                                <h3 className="panel-title">Search results</h3>
                                <Link to="/expenses/search" ><button type="button"
                                    /*onClick={this.props.toggleExpensesSearch}*/
                                    className="btn btn-info">Change Search</button>
                                </Link>
                            </div>

                            <div className="panel-body">
                                <div className="container">
                                    <ExpensesRowTitle />
                                    {map(this.props.expenses, function (expense, key) {
                                        return (
                                            <ExpenseCard iD={key} key={expense.created} expense={expense} /*editExpense={editExpense}*/ />
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
    // view: PropTypes.bool.isRequired,
    // add: PropTypes.bool.isRequired,
    // addNewNote: PropTypes.func.isRequired,
    // notes: PropTypes.object.isRequired,
    // viewMore: PropTypes.func.isRequired,
    // editNote: PropTypes.func.isRequired,
    // toggleNoteSearch: PropTypes.func.isRequired

};