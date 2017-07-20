import * as types from '../actions/types';
import * as actions from '../actions/actions';

const initialState = {
    currentUser: null,
    data: null
}

export default function reducer(prevState=initialState, action) {
    if (!action) return prevState;

    if(action.type === types.AUTH_STATE_CHANGE) {
        if(!action.currentUser) return prevState;
        const newState = Object.assign({}, prevState);
        newState.currentUser = action.currentUser;
        return newState;
    }
}