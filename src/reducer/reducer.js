import * as types from '../actions/types';

const initialState = {
    currentUser: null
};

export default function reducer (prevState = initialState, action) {

    if (action.type === types.LOG_IN_USER) {
        return Object.assign({}, prevState, {
            currentUser: action.currentUser
        });
    }
    
    if (action.type === types.LOG_OUT_USER) {
        return Object.assign({}, prevState, {
            currentUser: null
        });
    }

    else {
        return prevState;
    }
}