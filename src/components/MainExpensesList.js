import React, { Component } from 'react';
import ExpensesPageExpensesList from './ExpensesPageExpensesList';
import EditExpense from './EditExpense';
import PropTypes from 'prop-types';

class MainExpensesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            expenseId: '',
            expenses: null,
            newSubmit: false
        };
        this.editExpense = this.editExpense.bind(this);
    }
    render () {
        return (
            <div>
                 { this.state.edit
                 ? 
                 <div>
                {console.log(this.props.expenses[this.state.expenseId])}
                 <EditExpense 
                 id={this.state.expenseId} 
                 editExpense={this.editExpense} 
                 expense={this.props.expenses[this.state.expenseId]}/>
                 </div>
                : <ExpensesPageExpensesList
                    heading={'Latest Expenses'}
                    expenses={this.props.expenses}
                    viewMore={this.viewMore}
                    editExpense={this.editExpense}
                    newSubmit={this.state.newSubmit}
                />
                 }
            </div>
        );
    }
    editExpense (id) {
        this.setState({
            edit: !this.state.edit,
            expenseId: id
        });
    }
}


MainExpensesList.propTypes = {
    expenses: PropTypes.object.isRequired,
    getNotes: PropTypes.func.isRequired
};
export default MainExpensesList;