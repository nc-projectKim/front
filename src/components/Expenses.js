import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpensesSearch from './ExpensesSearch';
import Welcome from './Welcome';
import MainExpensesPage from './MainExpensesPage';
import FilteredExpenses from './FilteredExpenses';
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
        const userFirstName = this.props.currentUser.displayName.split(' ')[0];
        return (
                <div className='expenses-page'>
                    <div className='expenses-welcome'>
                    <Welcome
                        picture={'http://res.cloudinary.com/dl37xtqhv/image/upload/v1501154233/kim_wclvcm.png'}
                        messageTitle={`${userFirstName}'s Expenses`} 
                        />
                    <Switch>
                        <Route exact path='/expenses' component={MainExpensesPage}/>
                        <Route exact path='/expenses/search' component={ExpensesSearch} />
                        <Route path='/expenses/search/result' component={FilteredExpenses} />
                        <Route exact path='/expenses/add' component={AddExpense}/>
                        <Route path='/expenses/deleted' component={DeleteExpense} />
                        <Route path='/expenses/edited' component={ExpenseHasBeenEdited} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
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

Expenses.propTypes = {
    currentUser: PropTypes.object.isRequired,
};