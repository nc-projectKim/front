import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './css/NotesPanelButtons.css';
import PropTypes from 'prop-types';

class NotesPanelButtons extends Component {
    render () {
        return ( 
            <div className="row component-PanelButtons">
                    <button 
                    onClick={this.props.viewMore} 
                    type="button" 
                    className="btn btn-default notes-buttons collapse-btn"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                    &nbsp; Collapse</button>

                    <Link to={'/notes/add'}><button onClick={this.props.addNewNote}type="button" className="btn btn-default notes-buttons"><i className="fa fa-plus" aria-hidden="true"></i>
                     &nbsp; Add A Note</button></Link>
                    <Link to="/notes"><button type="button" className="btn btn-default notes-buttons view-more-notes-btn"><i className="fa fa-eye" aria-hidden="true"></i>
                    &nbsp; View More Notes</button></Link>
            </div>
        );
    }
}

export default NotesPanelButtons;

NotesPanelButtons.propTypes = {
    viewMore: PropTypes.func,
    // addNewNote: PropTypes.func.isRequired
};