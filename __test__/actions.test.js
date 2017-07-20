import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

describe('actions', () => {
    describe('#AUTH_STATE_CHANGE', () => {
        it('is a function', () => {
            expect(typeof actions.authStateChange).toBe('function');
        });
        it('return expected action', () => {
            expect(actions.authStateChange('user')).toEqual({
                type: types.AUTH_STATE_CHANGE,
                currentUser: 'user'
            });
        });
    });
});