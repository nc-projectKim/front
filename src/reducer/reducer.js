import * as types from '../actions/types';

const initialState = {
    currentUser: null,
    notes: {},
    loading: false,

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

    if (action.type === types.GET_NOTES_REQUEST) {
        return Object.assign({}, prevState, {
            data: action.data,
            loading: true,

        });
    }
    if (action.type === types.GET_NOTES_SUCCESS) {
        return Object.assign({}, prevState, {
            data: action.data,
            loading: false,
        });
    }

    if (action.type === types.GET_NOTES_ERROR) {
        return Object.assign({}, prevState, {
            loading: false,
            data: action.data
        });
    }

    else {
        return prevState;
    }
}