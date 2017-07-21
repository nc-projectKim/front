import * as types from '../actions/types';

const initialState = {
    currentUser: null
};

export function reducer(prevState = initialState, action) {

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

export function notesReducer(prevState = initialState, action) {

    // implement loading on request;

    if (action.type === types.GET_NOTES_SUCCESS) {
        return Object.assign({}, prevState, {
            data: action.data
        });
    }

    if (action.type === types.GET_NOTES_ERROR) {
        return Object.assign({}, prevState, {
            data: action.data
        });
    }

    return prevState;
}