import User from "../models/user";
import Message from "../models/message";

export const SEND_MESSAGE = "SEND_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: {
        message: string;
    };
}

export interface AddMessageAction {
    type: typeof ADD_MESSAGE;
    payload: {
        message: Message;
    };
}

export interface UserLoginAction {
    type: typeof USER_LOGIN;
    payload: {
        username: string;
        avatarId: string;
    };
}

export interface UserLoginSuccessAction {
    type: typeof USER_LOGIN_SUCCESS;
    payload: {
        user: User;
    };
}

export interface UserLoginFailureAction {
    type: typeof USER_LOGIN_FAILURE;
    payload: {
        error: string;
    }
}

export interface ClearMessagesAction {
    type: typeof CLEAR_MESSAGES;
}

export type ActionTypes = 
    SendMessageAction |
    AddMessageAction |
    UserLoginAction |
    UserLoginSuccessAction |
    UserLoginFailureAction |
    ClearMessagesAction;
