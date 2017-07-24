import * as types from './types';
import getAllNotes from '../utilities/getAllNotes.utilities';
import queryNote from '../utilities/queryNote.utilities';

export const logInUser = (currentUser) => {
    return {
        type: types.LOG_IN_USER,
        currentUser: currentUser
    };
};

export const logOutUser = () => {
    return {
        type: types.LOG_OUT_USER
    };
};

export function getNotes () {
    return function (dispatch) {
        dispatch(getNotesRequest());
        return getAllNotes()
        .then (res => {
            dispatch(getNotesSuccess(res));
        })
        .catch(err => {
            dispatch(getNotesError(err));
        });
    };
}

export function getNotesRequest () {
    return {
        type: types.GET_NOTES_REQUEST
    };
}

export function getNotesSuccess (notes) {
    return {
        type: types.GET_NOTES_SUCCESS,
        data: notes
    };
}

export function getNotesError (err) {
    return {
        type: types.GET_NOTES_ERROR,
        data: err
    };
}

export function queryNotes () {
    return function (dispatch) {
        dispatch(queryNotesRequest());
        return queryNote()
        .then (res => {
            dispatch(queryNotesSuccess(res));
        })
        .catch(err => {
            dispatch(queryNotesError(err));
        });
    };
}

export function queryNotesRequest () {
    return {
        type: types.QUERY_NOTES_REQUEST
    };
}

export function queryNotesSuccess (filteredNotes) {
    return {
        type: types.QUERY_NOTES_SUCCESS,
        filteredData: filteredNotes
    };
}

export function queryNotesError (err) {
    return {
        type: types.QUERY_NOTES_ERROR,
        filteredData: err
    };
}