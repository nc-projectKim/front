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
});