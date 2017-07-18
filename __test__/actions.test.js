import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


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

    // describe('#fetchNotes', () => {
    //     it('creates FETCH_NOTES_SUCCESS when fething notes has been done', () => {
    //         nock(`API_URL`)
    //             .get(`/notes`)
    //             .reply(200)
    //             const expectedAction = [{type: types.FETCH_NOTES_REQUEST}, {type: types.FETCH_NOTES_SUCCESS}];
    //             const store = mockStore(`/notes`)

    //             return store.dispatch(actions.fetchNotes()).then(() => {
    //                 expect(store.getActions()).toEqual(expectedAction);
    //             });
    //     });
    // });
});