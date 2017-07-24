import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './css/NotesPanelButtons.css';
import PropTypes from 'prop-types';

class ExpensesPanelButtons extends Component {
    render () {
        return ( 
            <div className="row component-ExpensesPanelButtons">
                    <button 
                    onClick={this.props.viewMore} 
                    type="button" 
                    className="btn btn-info collapse-btn"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                    &nbsp; Collapse</button>

                    <Link to={'/notes/add'}><button type="button" className="btn btn-info"><i className="fa fa-plus" aria-hidden="true"></i>
                     &nbsp; Add A Expense</button></Link>
                    <Link to="/expenses"><button type="button" className="btn btn-info view-more-notes-btn"><i className="fa fa-eye" aria-hidden="true"></i>
                    &nbsp; View More Expenses</button></Link>
            </div>
        );
    }
}

export default ExpensesPanelButtons;

ExpensesPanelButtons.propTypes = {
    viewMore: PropTypes.func,
    addNewNote: PropTypes.func.isRequired
};