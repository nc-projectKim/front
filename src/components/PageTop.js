import React, { Component } from 'react';
import Welcome from './Welcome';
import ActionButtons from './ActionButtons';
import './css/PageTop.css';


class PageTop extends Component {
    render() {
        return (
            <div className='component-PageTop'>
                <Welcome
                    messageTitle={'Welcome Back Kim'}
                    messageBody={'What can I help you with today?'} />
            </div>
        );
    }
}
export default PageTop;