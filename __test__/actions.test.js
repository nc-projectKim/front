import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

describe('actions', () => {
    describe('#LOG_IN_USER', () => {
        it('is a function', () => {
            expect(typeof actions.logInUser).toBe('function');
        });
        it('return expected action', () => {
            expect(actions.logInUser('user')).toEqual({
                type: types.LOG_IN_USER,
                currentUser: 'user'
            });
        });
    });

    describe('#LOG_OUT_USER', () => {
        it('is a function', () => {
            expect(typeof actions.logOutUser).toBe('function');
        });
        it('return expected action', () => {
            expect(actions.logOutUser()).toEqual({
                type: types.LOG_OUT_USER,
            });
        });
    });
    describe('#GET_NOTES_REQUEST', () => {
        it('is a function', () => {
            expect(typeof actions.getNotesRequest).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.getNotesRequest()).toEqual({
                type: types.GET_NOTES_REQUEST
            });
        });
    });
    describe('#GET_NOTES_SUCCESS', () => {
        it('is a function', () => {
            expect(typeof actions.getNotesSuccess).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.getNotesSuccess('let there be notes')).toEqual({
                type: types.GET_NOTES_SUCCESS,
                data: 'let there be notes'
            });
        });
    });
    describe('#GET_NOTES_ERROR', () => {
        it('is a function', () => {
            expect(typeof actions.getNotesError).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.getNotesError('err')).toEqual({
                type: types.GET_NOTES_ERROR,
                data: 'err'
            });
        });
    });

    describe('#QUERY_NOTES_REQUEST', () => {
        it('is a function', () => {
            expect(typeof actions.queryNotesRequest).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.queryNotesRequest()).toEqual({
                type: types.QUERY_NOTES_REQUEST
            });
        });
    });
    describe('#QUERY_NOTES_SUCCESS', () => {
        it('is a function', () => {
            expect(typeof actions.queryNotesSuccess).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.queryNotesSuccess('let there be notes')).toEqual({
                type: types.QUERY_NOTES_SUCCESS,
                filteredData: 'let there be notes'
            });
        });
    });
    describe('#QUERY_NOTES_ERROR', () => {
        it('is a function', () => {
            expect(typeof actions.queryNotesError).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.queryNotesError('err')).toEqual({
                type: types.QUERY_NOTES_ERROR,
                filteredData: 'err'
            });
        });
    });

    describe('#GET_EXPENSES_REQUEST', () => {
        it('is a function', () => {
            expect(typeof actions.getExpensesRequest).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.getExpensesRequest()).toEqual({
                type: types.GET_EXPENSES_REQUEST
            });
        });
    });
    describe('#GET_EXPENSES_SUCCESS', () => {
        it('is a function', () => {
            expect(typeof actions.getExpensesSuccess).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.getExpensesSuccess('let there be expenses')).toEqual({
                type: types.GET_EXPENSES_SUCCESS,
                data: 'let there be expenses'
            });
        });
    });
    describe('#GET_EXPENSES_ERROR', () => {
        it('is a function', () => {
            expect(typeof actions.getExpensesError).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.getExpensesError('err')).toEqual({
                type: types.GET_EXPENSES_ERROR,
                data: 'err'
            });
        });
    });

        describe('#QUERY_EXPENSES_REQUEST', () => {
        it('is a function', () => {
            expect(typeof actions.queryExpensesRequest).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.queryExpensesRequest()).toEqual({
                type: types.QUERY_EXPENSES_REQUEST
            });
        });
    });
    describe('#QUERY_EXPENSES_SUCCESS', () => {
        it('is a function', () => {
            expect(typeof actions.queryExpensesSuccess).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.queryExpensesSuccess('let there be expenses')).toEqual({
                type: types.QUERY_EXPENSES_SUCCESS,
                filteredData: 'let there be expenses'
            });
        });
    });
    describe('#QUERY_EXPENSES_ERROR', () => {
        it('is a function', () => {
            expect(typeof actions.queryExpensesError).toBe('function');
        });
        it('returns expected result', () => {
            expect(actions.queryExpensesError('err')).toEqual({
                type: types.QUERY_EXPENSES_ERROR,
                filteredData: 'err'
            });
        });
    });
});