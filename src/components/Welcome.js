import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="media">
                    <div className="media-left">
                            <img src="http://www.aminoapps.com/static/bower/emojify.js/images/emoji/information_desk_person.png" className="media-object" /></div>
                    <div className="welcomeText media-body">
                        <h3 className="media-heading">{this.props.messageTitle}</h3>
                        <p>{this.props.messageBody}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Welcome;

Welcome.propTypes = {
    messageTitle: PropTypes.string.isRequired,
    // messageBody: PropTypes.string.isRequired
};