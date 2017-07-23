import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Welcome.css';

class Welcome extends Component {
    render () {
        return (
                <div className="media">
                    <div className="media-left">
                            <img src={this.props.picture} className="media-object" /></div>
                    <div className="welcomeText media-body">
                        <h3 className="media-heading">{this.props.messageTitle}</h3>
                        <p>{this.props.messageBody}</p>
                    </div>
                </div>
        );
    }
}
export default Welcome;

Welcome.propTypes = {
    messageTitle: PropTypes.string.isRequired,
    messageBody: PropTypes.string,
    picture: PropTypes.string.isRequired
};