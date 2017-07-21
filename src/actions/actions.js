import * as types from './types';

export const logInUser = (currentUser) => {
    return {
        type: types.LOG_IN_USER,
        currentUser: currentUser
    };
};

export const logOutUser = () => {
    return {
        type: types.LOG_OUT_USER
    };
};

