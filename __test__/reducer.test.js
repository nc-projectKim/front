import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import reducer from '../src/reducer/reducer';

const initialState = {
    currentUser: null,
    data: null
}

describe('reducer', () => {
    describe('#reducer', () => {
        it('is a function', () => {
            expect(typeof reducer).toBe('function')
        })
        it('returns previous state if action is not defined', () => {
            const newState = reducer(initialState)
            expect(newState).toBe(initialState);
        });
    });
    describe('#action: authStateChange', () => {
        it('return the previous state if no user is defined', () => {
        const action = actions.authStateChange();
        const newState = reducer(initialState, action);
        expect(newState).toBe(initialState);
        expect(newState.currentUser).toBe(initialState.currentUser);
        })
    });
});