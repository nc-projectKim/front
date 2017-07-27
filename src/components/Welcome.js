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
                        <div className="col-xs-4 col-sm-3">
                            <img src={'http://res.cloudinary.com/dl37xtqhv/image/upload/v1501154233/kim_wclvcm.png'} className="profilePicture media-object" />
                        </div>
                        <div className="col-xs-8 welcomeText">
                            <h4 className="welcomeTextHeader">{this.props.messageTitle}</h4>
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