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
<<<<<<< HEAD
                    className="btn expenses-buttons view-btn">
=======
                    className="btn btn-info view-btn">
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        &nbsp; Expand
                </button>

                <Link to="/expenses/add"><button
                    type="button"
<<<<<<< HEAD
                    className="btn expenses-buttons "><i className="fa fa-plus" aria-hidden="true"></i>
=======
                    className="btn btn-info "><i className="fa fa-plus" aria-hidden="true"></i>
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
                     &nbsp; Add An Expense
                    </button></Link>


                <Link to="/expenses/search" ><button type="button"
<<<<<<< HEAD
                    className="btn expenses-buttons search-btn"><i className="fa fa-search" aria-hidden="true"></i>
=======
                    className="btn btn-info search-btn"><i className="fa fa-search" aria-hidden="true"></i>
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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