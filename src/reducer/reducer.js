import * as types from '../actions/types';

const initialState = {
    currentUser: null,
    notes: {},
    loading: false,
    filteredData: {}

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
            data: Object.assign({}, action.data),
            loading: false,
        });
    }

    if (action.type === types.GET_NOTES_ERROR) {
        return Object.assign({}, prevState, {
            loading: false,
            data: action.data
        });
    }

    if (action.type === types.QUERY_NOTES_REQUEST) {
        return Object.assign({}, prevState, {
            filteredData: action.filteredData,
            loading: true,

        });
    }
    if (action.type === types.QUERY_NOTES_SUCCESS) {
        return Object.assign({}, prevState, {
            filteredData: Object.assign({}, action.filteredData),
            loading: false,
        });
    }

    if (action.type === types.QUERY_NOTES_ERROR) {
        return Object.assign({}, prevState, {
            loading: false,
            filteredData: action.filteredData
        });
    }

    if (action.type === types.GET_EXPENSES_REQUEST) {
        return Object.assign({}, prevState, {
            expenses: action.data,
            loading: true,

        });
    }
    if (action.type === types.GET_EXPENSES_SUCCESS) {
        return Object.assign({}, prevState, {
            expenses: Object.assign({}, action.data),
            loading: false,
        });
    }

    if (action.type === types.GET_EXPENSES_ERROR) {
        return Object.assign({}, prevState, {
            loading: false,
            expenses: action.data
        });
    }


    if (action.type === types.QUERY_EXPENSES_REQUEST) {
        return Object.assign({}, prevState, {
            filteredExpenses: action.filteredData,
            loading: true,

        });
    }
    if (action.type === types.QUERY_EXPENSES_SUCCESS) {
        return Object.assign({}, prevState, {
            filteredExpenses: Object.assign({}, action.filteredData),
            loading: false,
        });
    }

    if (action.type === types.QUERY_EXPENSES_ERROR) {
        return Object.assign({}, prevState, {
            loading: false,
            filteredExpenses: action.filteredData
        });
    }

    else {
        return prevState;
    }
}