import React from 'react';
import Welcome from './Welcome';
import './css/Billing.css';

const Billing = () => {
    return (
        <div className='billing-page'>
            <div className='billing-welcome'>
                <Welcome/>
                <div>
                    <h1>Coming Soon!</h1>
                </div>
            </div>
        </div>
    );
};
export default Billing;
