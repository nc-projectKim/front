import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import reducer from '../src/reducer/reducer';

const initialState = {
    currentUser: null,
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
            });
        });
    });
    describe('#action: LOG_OUT_USER', () => {
        it('changes the current user to null', () => {
            const action = actions.logOutUser();
            const newState = reducer(initialState, action);
            expect(newState.currentUser).toEqual(null);
            expect(newState).toEqual({
                currentUser: null,
            });
        });
    });
});