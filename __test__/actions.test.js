import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';


describe('actions', () => {
    describe('#FETCH_NOTES_REQUEST', () => {
        it('is a function', () => {
            expect(typeof actions.fetchNotesRequest).toBe('function');
        });
        it('return expected action', () => {
            expect(actions.fetchNotesRequest()).toEqual({
                type: types.FETCH_NOTES_REQUEST
            });
        });
    });
    describe('#FETCH_NOTES_SUCCESS', () => {
        it('is a function', () => {
            expect(typeof actions.fetchNotesSuccess).toBe('function');
        });
        it('return expected action', () => {
            expect(actions.fetchNotesSuccess('notes')).toEqual({
                type: types.FETCH_NOTES_SUCCESS,
                data: 'notes'
            });
        });
    });
    describe('#FETCH_NOTES_ERROR', () => {
        it('is a function', () => {
            expect(typeof actions.fetchNotesError).toBe('function');
        });
        it('return expected action', () => {
            expect(actions.fetchNotesError('error')).toEqual({
                type: types.FETCH_NOTES_ERROR,
                data: 'error'
            });
        });
    });
});