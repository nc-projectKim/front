import React, { Component } from 'react';


class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="media">
                    <div className="media-left">
                        <img src="http://www.aminoapps.com/static/bower/emojify.js/images/emoji/information_desk_person.png" className="media-object"/></div>
                        <div className="media-body">
                        <h4 className="media-heading">Welcome Back Kim</h4>
                        <p>What can I help you with today?</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Welcome;