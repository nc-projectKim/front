import {CONFIG} from '../../config.js';
import {reactReduxFirebase} from 'react-redux-firebase';
import {compose, createStore} from 'redux';
import rootReducer from '../reducer/';
// import {createStore, applyMiddleware} from 'redux';

const initialState = {
    currentUser: null,
    data: null
};


const config = {
    userProfile: 'users',
    enableLogging: false
};

const createStoreWithFirebase = compose(reactReduxFirebase(CONFIG, config))(createStore);

export const store = createStoreWithFirebase(rootReducer, initialState);
