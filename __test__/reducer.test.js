import * as actions from '../src/actions/actions';
// import * as types from '../src/actions/types';
import reducer from '../src/reducer/reducer';

const initialState = {
    currentUser: null,
    notes: {},
    loading: false
};

describe('reducer', () => {
    describe('#reducer', () => {
        it('is a function', () => {
            expect(typeof reducer).toBe('function');
        });
    });
    describe('#action: LOG_IN_USER', () => {
        it('changes the current user to the new user', () => {
            const action = actions.logInUser('user');
            const newState = reducer(initialState, action);
            expect(newState.currentUser).toEqual('user');
            expect(newState).toEqual({
                currentUser: 'user',
                notes: {},
                loading: false
            });
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: LOG_OUT_USER', () => {
        it('changes the current user to null', () => {
            const action = actions.logOutUser();
            const newState = reducer(initialState, action);
            expect(newState.currentUser).toEqual(null);
            expect(newState).toEqual({
                currentUser: null,
                notes: {},
                loading: false
            });
            expect(newState).not.toBe(initialState);
        });
    });


    describe('#action: GET_NOTES_REQUEST', () => {
        it('should set loading to true', () => {
            const action = actions.getNotesRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(true);
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: GET_NOTES_SUCCESS', () => {
        it('should set loading to true', () => {
            const action = actions.getNotesSuccess({notes: 'notes'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.data).toEqual({
                notes: 'notes'
            });
            expect(newState.data).not.toBe({
                notes: 'notes'
            });
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: GET_NOTES_ERROR', () => {
        it('should set loading to true', () => {
            const action = actions.getNotesError({error: 'error'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.data).toEqual({
                error: 'error'
            });
            expect(newState.data).not.toBe({
                error: 'error'
            });
            expect(newState).not.toBe(initialState);
        });
    });


    describe('#action: QUERY_NOTES_REQUEST', () => {
        it('should set loading to true', () => {
            const action = actions.queryNotesRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(true);
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: QUERY_NOTES_SUCCESS', () => {
        it('should set loading to true', () => {
            const action = actions.queryNotesSuccess({filteredNotes: 'notes'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.filteredData).toEqual({
                filteredNotes: 'notes'
            });
            expect(newState.filteredData).not.toBe({
                filteredNotes: 'notes'
            });
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: QUERY_NOTES_ERROR', () => {
        it('should set loading to true', () => {
            const action = actions.queryNotesError({error: 'error'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.filteredData).toEqual({
                error: 'error'
            });
            expect(newState.filteredData).not.toBe({
                error: 'error'
            });
            expect(newState).not.toBe(initialState);
        });
    });

        describe('#action: GET_EXPENSES_REQUEST', () => {
        it('should set loading to true', () => {
            const action = actions.getExpensesRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(true);
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: GET_Expenses_SUCCESS', () => {
        it('should set loading to true', () => {
            const action = actions.getExpensesSuccess({expenses: 'expenses'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.expenses).toEqual({
                expenses: 'expenses'
            });
            expect(newState.expenses).not.toBe({
                expenses: 'expenses'
            });
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: GET_EXPENSES_ERROR', () => {
        it('should set loading to true', () => {
            const action = actions.getExpensesError({error: 'error'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.expenses).toEqual({
                error: 'error'
            });
            expect(newState.expenses).not.toBe({
                error: 'error'
            });
            expect(newState).not.toBe(initialState);
        });
    });

  describe('#action: QUERY_EXPENSES_REQUEST', () => {
        it('should set loading to true', () => {
            const action = actions.queryExpensesRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(true);
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: QUERY_EXPENSES_SUCCESS', () => {
        it('should set loading to true', () => {
            const action = actions.queryExpensesSuccess({filteredExpenses: 'expenses'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.filteredExpenses).toEqual({
                filteredExpenses: 'expenses'
            });
            expect(newState.filteredExpenses).not.toBe({
                filteredExpenses: 'expenses'
            });
            expect(newState).not.toBe(initialState);
        });
    });
    describe('#action: QUERY_EXPENSES_ERROR', () => {
        it('should set loading to true', () => {
            const action = actions.queryExpensesError({error: 'error'});
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(false);
            expect(newState.filteredExpenses).toEqual({
                error: 'error'
            });
            expect(newState.filteredExpenses).not.toBe({
                error: 'error'
            });
            expect(newState).not.toBe(initialState);
        });
    });

});