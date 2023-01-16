import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS,
});

export const userLoginSuccess = ({ email, password }) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        userInfo: { email, password },
    };
};

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL,
});
