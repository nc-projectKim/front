import React, { Component } from 'react';
import './css/Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="media">
                    <div className="media-left">
                            <img src="http://www.aminoapps.com/static/bower/emojify.js/images/emoji/information_desk_person.png" className="media-object" /></div>
                    <div className="welcomeText media-body">
                        <h3 className="media-heading">Welcome Back Kim</h3>
                        <p>What can I help you with today?</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Welcome;