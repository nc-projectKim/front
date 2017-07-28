import React, { Component } from 'react';
import Welcome from './Welcome';
import './css/PageTop.css';
import PropTypes from 'prop-types';


class PageTop extends Component {
    render () {
        return (
            <div className='component-PageTop'>
                <Welcome
                    messageTitle={`Welcome Back ${this.props.name}`}
                    messageBody={'What can I help you with today?'}
                    picture={'http://res.cloudinary.com/dl37xtqhv/image/upload/v1501154233/kim_wclvcm.png'} />
            </div>
        );
    }
}
export default PageTop;

PageTop.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};