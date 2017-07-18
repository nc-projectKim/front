import * as types from 'types';

export function fetchNotesRequest() {
    return {
        type: types.FETCH_NOTES_REQUEST
    };
}

export function fetchNotesSuccess() {
    return {
        type: types.FETCH_NOTES_SUCCESS
    };
}

export function fetchNotesError() {
    return {
        type: types.FETCH_NOTES_ERROR
    };
}