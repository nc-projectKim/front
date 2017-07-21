import * as types from './types';
import getAllNotes from '../utilities/getAllNotes.utilities';

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
        getAllNotes()
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