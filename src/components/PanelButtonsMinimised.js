import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/PanelButtons.css';

class PanelButtonsMinimised extends Component {
    render() {
        return (
            <div className="row component-PanelButtons">
                <button
                    onClick={this.props.viewMore}
                    type="button"
                    className="btn btn-info view-btn">
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        &nbsp; Expand
                </button>

                <button
                    type="button"
                    onClick={this.props.addNewNote}
                    className="btn btn-info"><i className="fa fa-plus" aria-hidden="true"></i>
                     &nbsp; Add A Note
                    </button>


                <Link to="/notes/search" ><button type="button"
                    className="btn btn-info search-btn"><i className="fa fa-search" aria-hidden="true"></i>
                    &nbsp; Search
                </button>
                </Link>
            </div>
        );
    }
}
export default PanelButtonsMinimised;

PanelButtonsMinimised.propTypes = {
    viewMore: PropTypes.func.isRequired,
    addNewNote: PropTypes.func.isRequired
};