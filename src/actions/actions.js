import * as types from './types';

export const authStateChange = (currentUser) => {
    return {
        type: types.AUTH_STATE_CHANGE,
        currentUser: currentUser
    }
}

