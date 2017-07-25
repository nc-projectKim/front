import * as types from './types';
import getAllNotes from '../utilities/getAllNotes.utilities';
import getAllExpenses from '../utilities/getAllExpenses.utilities';
import queryNotes from '../utilities/queryNote.utilities';
// import queryExpenses from '../utilities/queryExpense.utilities';

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

export function getQueryNotes (obj) {
    return function (dispatch) {
        dispatch(queryNotesRequest());
        return queryNotes(obj)
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

export function getExpenses () {
    return function (dispatch) {
        dispatch(getExpensesRequest());
        return getAllExpenses()
        .then (res => {
            dispatch(getExpensesSuccess(res));
        })
        .catch(err => {
            dispatch(getExpensesError(err));
        });
    };
}

export function getExpensesRequest () {
    return {
        type: types.GET_EXPENSES_REQUEST
    };
}

export function getExpensesSuccess (expenses) {
    return {
        type: types.GET_EXPENSES_SUCCESS,
        data: expenses
    };
}

export function getExpensesError (err) {
    return {
        type: types.GET_EXPENSES_ERROR,
        data: err
    };
}

// export function getQueryExpenses (obj) {
//     return function (dispatch) {
//         dispatch(queryExpensesRequest());
//         // return queryExpenses(obj)
//         .then (res => {
//             dispatch(queryExpensesSuccess(res));
//         })
//         .catch(err => {
//             dispatch(queryExpensesError(err));
//         });
//     };
// }

// export function queryExpensesRequest () {
//     return {
//         type: types.QUERY_EXPENSES_REQUEST
//     };
// }

// export function queryExpensesSuccess (filteredExpenses) {
//     return {
//         type: types.QUERY_EXPENSES_SUCCESS,
//         filteredExpenses: filteredExpenses
//     };
// }

// export function queryExpensesError (err) {
//     return {
//         type: types.QUERY_EXPENSES_ERROR,
//         filteredExpenses: err
//     };
// }