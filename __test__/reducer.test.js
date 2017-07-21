import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
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
});