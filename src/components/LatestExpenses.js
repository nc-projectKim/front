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
		console.log(this.props.expenses);
        return (
            <div>
                {/* { this.state.edit
                ? <EditNote editNote={this.editNote} note={this.props.notes[this.state.noteId]}/>
                : <NotesList*/}
                <ExpensesList
                    heading={'Latest Expenses'}
                    view={this.state.view}
                    expenses={this.props.expenses}
                    /* editNote={this.editNote}*/
                />
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
	console.log('mapping dispatch');
    return {
        getExpenses: () => {
            dispatch(actions.getExpenses());
        }
    };
}

function mapStateToProps (state) {
	console.log('mapping state');
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