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
                    className="btn btn-info view-btn">
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        &nbsp; Expand
                </button>

                <Link to="/notes/add"><button
                    type="button"
                    className="btn btn-info "><i className="fa fa-plus" aria-hidden="true"></i>
                     &nbsp; Add An Expense
                    </button></Link>


                <Link to="/notes/search" ><button type="button"
                    className="btn btn-info search-btn"><i className="fa fa-search" aria-hidden="true"></i>
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