import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Welcome.css';

class Welcome extends Component {
    render () {
        return (
                <div className="panel panel-default">
                    <div className="welcome-header"> 
                    </div>
                    <div className="panel-body row">
                        <div className="col-xs-2">
                            <img src={'http://res.cloudinary.com/dl37xtqhv/image/upload/v1501154233/kim_wclvcm.png'} className="profilePicture media-object" />
                        </div>
                        <div className="col-xs-9 welcomeText">
                            <h3 className="welcomeTextHeader">{this.props.messageTitle}</h3>
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
    messageBody: PropTypes.string,
    picture: PropTypes.string.isRequired
};