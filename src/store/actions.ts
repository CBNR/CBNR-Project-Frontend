import { SendMessageAction, SEND_MESSAGE, UserLoginAction, USER_LOGIN, UserLoginSuccessAction, USER_LOGIN_SUCCESS, UserLoginFailureAction, USER_LOGIN_FAILURE, ClearMessagesAction, CLEAR_MESSAGES } from "./actionTypes";
import User from "../models/user";

export const SEND_MESSAGE_ACTION_CREATOR = (message: string): SendMessageAction => ({
    type: SEND_MESSAGE,
    payload: {
        message,
    },
});

export const USER_LOGIN_ACTION_CREATOR = (username: string, avatarId: string): UserLoginAction => ({
    type: USER_LOGIN,
    payload: {
        username,
        avatarId,
    }
});

export const USER_LOGIN_SUCCESS_ACTION_CREATOR = (user: User): UserLoginSuccessAction => ({
    type: USER_LOGIN_SUCCESS,
    payload: {
        user,
    }
});

export const USER_LOGIN_FAILURE_ACTION_CREATOR = (error: string): UserLoginFailureAction => ({
    type: USER_LOGIN_FAILURE,
    payload: {
        error,
    }
});

export const CLEAR_MESSAGES_ACTION_CREATOR = (): ClearMessagesAction => ({
    type: CLEAR_MESSAGES,
});
