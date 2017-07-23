import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './css/PanelButtons.css';
import PropTypes from 'prop-types';

class PanelButtons extends Component {
    render () {
        return ( 
            <div className="row component-PanelButtons">
                    <button 
                    onClick={this.props.viewMore} 
                    type="button" 
                    className="btn btn-info collapse-btn"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                    &nbsp; Collapse</button>

                    <button onClick={this.props.addNewNote}type="button" className="btn btn-info"><i className="fa fa-plus" aria-hidden="true"></i>
                     &nbsp; Add A Note</button>
                    <Link to="/notes"><button type="button" className="btn btn-info view-more-notes-btn"><i className="fa fa-eye" aria-hidden="true"></i>
                    &nbsp; View More Notes</button></Link>
            </div>
        );
    }
}

export default PanelButtons;

PanelButtons.propTypes = {
    viewMore: PropTypes.func,
    addNewNote: PropTypes.func.isRequired
};