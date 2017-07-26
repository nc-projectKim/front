import React, { Component } from 'react';
import ExpensesRowTitle from './ExpensesRowTitle';
import ExpenseCard from './ExpenseCard';
import ExpensesPanelButtons from './ExpensesPanelButtons';
import ExpensesPanelButtonsMinimised from './ExpensesPanelButtonsMinimised';
import { map, each } from 'underscore';
import PropTypes from 'prop-types';
import './css/ExpensesList.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import alterValuesExpenses from './component-utilities/alterValues';

class ExpensesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newSubmit: false,
            view: false
        };
        this.viewMore = this.viewMore.bind(this);

    }
    render () {
        const editExpense = this.props.editExpense;
        const expensesAltered = alterValuesExpenses (this.props.expenses).slice(0, 10);
        console.log('ea', expensesAltered);
        return (
            <div>
                {this.state.view
                    ?
                    <div className='panel panel-default'>
                        <div className="panel-heading">
                            <span>
                                <h3 className="panel-title"><span>Latest Expenses</span></h3>
                                <Link to="/expenses/search" ><button type="button"
                                    className="btn btn-info srch-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                                </Link>
                            </span>
                        </div>

                        <div className="panel-body">
                            <div className="container">
                                <ExpensesRowTitle />
                                {map(expensesAltered, function (expense) {
                                    return (
                                        <ExpenseCard 
                                        iD={expense[0]} 
                                        key={expense[1].created} 
                                        editExpense={editExpense} 
                                        expense={expense[1]} />
                                    );
                                })}
                                <ExpensesPanelButtons
                                    viewMore={this.viewMore}
                                    expenses={this.props.expenses}
                                />
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Expenses</h3>
                                <ExpensesPanelButtonsMinimised
                                    viewMore={this.viewMore}
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
    viewMore () {
        this.setState({
            view: !this.state.view
        });
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addNote: (note) => {
//             dispatch(actions.)
//         }
//     }
// }

export default ExpensesList;

ExpensesList.propTypes = {
    // view: PropTypes.bool.isRequired,
    expenses: PropTypes.object.isRequired,
    // viewMore: PropTypes.func.isRequired,
    editExpense: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired
};

