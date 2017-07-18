import React, { Component } from 'react';
import Welcome from './Welcome';
import ActionButtons from './ActionButtons';


class PageTop extends Component {
    render () {
        return (
            <div>
                <Welcome/>
                <ActionButtons/>
            </div>
        );
    }
}
export default PageTop;