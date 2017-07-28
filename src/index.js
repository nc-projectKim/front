import ReactDOM from 'react-dom';
import React from 'react';
import reducer from './reducer/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>,
    document.getElementById('root')
);