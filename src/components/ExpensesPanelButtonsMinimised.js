import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/NotesPanelButtons.css';

class ExpensesPanelButtonsMinimised extends Component {
    render () {
        return (
            <div className="row component-NotesPanelButtons">
                <button
                    onClick={this.props.viewMore}
                    type="button"
                    className="btn btn-default expenses-buttons view-btn">
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        &nbsp; Expand
                </button>

                <Link to="/expenses/add"><button
                    type="button"
                    className="btn btn-default expenses-buttons "><i className="fa fa-plus" aria-hidden="true"></i>
                     &nbsp; Add An Expense
                    </button></Link>


                <Link to="/expenses/search" ><button type="button"
                    className="btn btn-default expenses-buttons search-btn"><i className="fa fa-search" aria-hidden="true"></i>
                    &nbsp; Search
                </button>
                </Link>
            </div>
        );
    }
}
export default ExpensesPanelButtonsMinimised;

ExpensesPanelButtonsMinimised.propTypes = {
    viewMore: PropTypes.func.isRequired,
};