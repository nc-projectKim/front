import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Welcome.css';

class Welcome extends Component {
    render () {
        return (
<<<<<<< HEAD
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
                    
=======
                <div className="media">
                    <div className="media-left">
                            <img src={this.props.picture} className="media-object" /></div>
                    <div className="welcomeText media-body">
                        <h3 className="media-heading">{this.props.messageTitle}</h3>
                        <p>{this.props.messageBody}</p>
                    </div>
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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