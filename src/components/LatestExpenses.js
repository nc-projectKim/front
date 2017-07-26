import React, { Component } from 'react';
import ExpensesList from './ExpensesList';
// import EditExpense from './EditExpenses';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
// import _ from 'underscore';

class LatestExpenses extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            expenseId: '',
            expenses: null
        };
        // this.editExpense = this.editExpense.bind(this);
    }
    componentDidMount () {
        this.props.getExpenses();
        this.setState({
            expenses: this.props.expenses
        });
    }
    render () {
        return (
            <div>
                 { this.state.edit
                ? <EditExpense 
                editExpense={this.editExpense} 
                expense={this.props.expenses[this.state.expenses]} 
                expenseId={this.props.expenses[this.state.expenseId]}
                />
                : <ExpensesList
                    heading={'Latest Expenses'}
                    view={this.state.view}
                    expenses={this.props.expenses}
                    editExpense={this.editExpense}
                />}
            </div>
        );
    }
    // editNote (id) {
    //     this.setState({
    //         edit: !this.state.edit,
    //         noteId: id
    //     });
    // }
}

function mapDispatchToProps (dispatch) {
    return {
        getExpenses: () => {
            dispatch(actions.getExpenses());
        }
    };
}

function mapStateToProps (state) {
    return {
        expenses: state.expenses,
    };
}


// LatestExpenses.propTypes = {
//     notes: PropTypes.any,
//     getNotes: PropTypes.func.isRequired
// };

// export default LatestExpenses;
export default connect(mapStateToProps, mapDispatchToProps)(LatestExpenses);