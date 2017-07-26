import React, { Component } from 'react';
// import RowTitle from './RowTitle';
// import NoteCard from './NoteCard';
// import NotesPanelButtons from './NotesPanelButtons';
// import NotesPanelButtonsMinimised from './NotesPanelButtonsMinimised';
// import { map } from 'underscore';
import PropTypes from 'prop-types';
import ExpensesSearch from './ExpensesSearch';
// import AddNote from './AddNote';
import Welcome from './Welcome';
import MainExpensesPage from './MainExpensesPage';
import FilteredExpenses from './FilteredExpenses';
// import AddExpense from './AddExpense';
import { connect } from 'react-redux';
import NoMatch from './NoMatch';
import AddExpense from './AddExpense';
import DeleteExpense from './DeleteExpense';
import ExpenseHasBeenEdited from './ExpenseHasBeenEdited';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/Expenses.css';


class Expenses extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    render () {
        console.log('cu', this.props.currentUser);
        const userFirstName = this.props.currentUser.displayName.split(' ')[0];
        return (
            <div className='expenses-page'>
                <Welcome className='expenses-welcome'
                    picture={this.props.currentUser.photoURL}
                    messageTitle={`${userFirstName}'s Expenses`} 
                    />
                <Switch>
                    <Route exact path='/expenses' component={MainExpensesPage}/>
                    {/* <Route exact path='/notes/add' component={AddNote}/>*/}
                     <Route exact path='/expenses/search' component={ExpensesSearch} />
                     <Route path='/expenses/search/result' component={FilteredExpenses} />
                     <Route exact path='/expenses/add' component={AddExpense}/>
                     <Route path='/expenses/deleted' component={DeleteExpense} />
                     <Route path='/expenses/edited' component={ExpenseHasBeenEdited} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Expenses);
// export default Expenses;

Expenses.propTypes = {
    currentUser: PropTypes.object.isRequired,
};