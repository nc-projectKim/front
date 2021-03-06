import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/NotesPanelButtons.css';

class NotesPanelButtonsMinimised extends Component {
    render () {
        return (
            <div className="row component-NotesPanelButtons">
                <button
                    onClick={this.props.viewMore}
                    type="button"
                    className="btn btn-default notes-buttons view-btn ">
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        &nbsp; Expand
                </button>

                <Link to="/notes/add"><button
                    type="button"
                    className="btn btn-default notes-buttons"><i className="fa fa-plus" aria-hidden="true"></i>
                     &nbsp; Add A Note
                    </button></Link>


                <Link to="/notes/search" ><button type="button"
                    className="btn btn-default notes-buttons search-btn"><i className="fa fa-search" aria-hidden="true"></i>
                    &nbsp; Search
                </button>
                </Link>
            </div>
        );
    }
}
export default NotesPanelButtonsMinimised;

NotesPanelButtonsMinimised.propTypes = {
    viewMore: PropTypes.func.isRequired,
};