import * as types from './types';
import axios from 'axios';

export function fetchNotes () {
    return function (dispatch) {
        dispatch(fetchNotesRequest());
        axios.get('API_URL')
        .then((res) => {
            dispatch(fetchNotesSuccess(res.data));
        })
        .catch((error) => {
            dispatch(fetchNotesError(error));
        });
    };
}

export function fetchNotesRequest () {
    return {
        type: types.FETCH_NOTES_REQUEST
    };
}

export function fetchNotesSuccess (notes) {
    return {
        type: types.FETCH_NOTES_SUCCESS,
        data: notes
    };
}

export function fetchNotesError (error) {
    return {
        type: types.FETCH_NOTES_ERROR,
        data: error
    };
}