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
<<<<<<< HEAD
                    picture={'http://res.cloudinary.com/dl37xtqhv/image/upload/v1501154233/kim_wclvcm.png'} />
=======
                    picture={this.props.picture} />
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
            </div>
        );
    }
}
export default PageTop;

PageTop.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};