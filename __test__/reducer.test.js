import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import reducer from '../src/reducer/reducer';

describe('reducer', () => {
    describe('#reducer', () => {
        it('is a function', () => {
            expect(typeof reducer).toBe('function')
        })
    })
});