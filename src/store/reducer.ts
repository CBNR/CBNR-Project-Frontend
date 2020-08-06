import { ActionTypes, SEND_MESSAGE, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, CLEAR_MESSAGES } from "./actionTypes";
import { createStore, applyMiddleware } from "redux";
import Message from "../models/message";
import User from "../models/user";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./sagas";

export const initialState = {
    username: "",
    chatMessages: [] as Message[],
    inProgressLogin: false,
    currentUser: undefined as User | undefined,
};

const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                chatMessages: [...state.chatMessages, { id: "test", user: state.currentUser || {} as User, timestamp: "Temp", text: action.payload.message}],
            };
        case CLEAR_MESSAGES:
            return {
                ...state,
                chatMessages: [],
            };
        case USER_LOGIN:
            return {
                ...state,
                inProgressLogin: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                inProgressLogin: false,
                currentUser: action.payload.user,
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                inProgressLogin: false,
            };
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export type StateDefinition = ReturnType<typeof reducer>;

export default reducer;
