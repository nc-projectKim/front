import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './css/PanelButtons.css';
import PropTypes from 'prop-types';

class PanelButtons extends Component {
    render () {
        return ( 
            <div className="row component-PanelButtons">
                <div>
                    <Link to={'#'}><button type="button" className="btn btn-info">View More</button></Link>
                    <button onClick={this.props.viewMore} type="button" className="btn btn-info">Collapse</button>
                    <button onClick={this.props.addNewNote}type="button" className="btn btn-info">Add</button>
                </div>
            </div>
        );
    }
}

export default PanelButtons;

PanelButtons.propTypes = {
    viewMore: PropTypes.func.isRequired,
    addNewNote: PropTypes.func.isRequired
};