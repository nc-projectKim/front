import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import './css/PanelButtons.css';

class PanelButtonsMinimised extends Component {
    render() {
        return ( 
            <div className="row component-PanelButtons">
                <div>
                    <button onClick={this.props.viewMore}type="button" className="btn btn-info">View</button>
                    <Link to={'#'}><button type="button" className="btn btn-info">Add</button></Link>
                </div>
            </div>
        );
    }
}
export default PanelButtonsMinimised;

PanelButtonsMinimised.propTypes = {
    viewMore: PropTypes.func.isRequired
};