import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import './css/PanelButtons.css';

class PanelButtonsMinimised extends Component {
    render () {
        return ( 
            <div className="row component-PanelButtons">
                <div>
                    <button onClick={this.props.viewMore}type="button" className="btn btn-info">View</button>
                    <button type="button" onClick={this.props.addNewNote}className="btn btn-info">Add</button>
                    <button type="button" 
                    
                    onClick={this.props.toggleNoteSearch} 
                    className="btn btn-default">Search</button>
                    
                </div>
            </div>
        );
    }
}
export default PanelButtonsMinimised;

PanelButtonsMinimised.propTypes = {
    viewMore: PropTypes.func.isRequired,
    addNewNote: PropTypes.func.isRequired,
    toggleNoteSearch: PropTypes.func.isRequired
    
};