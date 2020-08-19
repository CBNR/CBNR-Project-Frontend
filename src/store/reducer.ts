import { ActionTypes, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, SOCKET_LEAVE_ROOM, SOCKET_JOIN_ROOM, SOCKET_ROOM_DETAILS, SOCKET_ROOM_LIST, SOCKET_RECEIVE_MESSAGE, EMIT_ROOM_DETAILS, EMIT_ROOM_LIST, EMIT_JOIN_ROOM, EMIT_LEAVE_ROOM, EMIT_SEND_MESSAGE, SOCKET_USER_JOIN, SOCKET_USER_LEAVE, SOCKET_FAILURE } from "./actionTypes";
import { createStore, applyMiddleware } from "redux";
import Message from "../models/message";
import User from "../models/user";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./sagas";
import Room from "../models/room";
import RoomListDTO from "../models/DTO/roomListDTO";

export const initialState = {
    chatMessages: [] as Message[],
    currentRoom: undefined as Room | undefined,
    inProgressLogin: false,
    currentUser: undefined as User | undefined,
    roomList: [] as RoomListDTO[],
    errors: [] as string[],
};

const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
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

        // Socket events
        case SOCKET_JOIN_ROOM:
            return {
                ...state,
                currentRoom: action.payload,
                chatMessages: [],
            };
        case SOCKET_LEAVE_ROOM:
            return {
                ...state,
                currentRoom: undefined,
                chatMessages: [],
            };
        case SOCKET_ROOM_DETAILS:
            return {
                ...state,
                currentRoom: action.payload,
            };
        case SOCKET_ROOM_LIST:
            return {
                ...state,
                roomList: action.payload,
            };
        case SOCKET_RECEIVE_MESSAGE: {
            if (!state.currentRoom || !state.currentUser) {
                return state;
            }
            const sendingUser = state.currentRoom.connectedUsers.find(user => user.id === action.payload.senderId)
                || (state.currentUser.id === action.payload.senderId && state.currentUser);
            const message: Message = {
                id: action.payload.id,
                timestamp: action.payload.time,
                user: sendingUser || {} as User,
                text: action.payload.message,
            };
            
            return sendingUser
                ? { ...state, chatMessages: [...state.chatMessages, message] }
                : state;
        }
        case SOCKET_USER_JOIN:
            return {
                ...state,
                currentRoom: state.currentRoom && {
                    ...state.currentRoom,
                    connectedUsers: [...state.currentRoom.connectedUsers, action.payload],
                },
            };
        case SOCKET_USER_LEAVE:
            return {
                ...state,
                currentRoom: state.currentRoom && {
                    ...state.currentRoom,
                    connectedUsers: state.currentRoom.connectedUsers.filter(user => user.id !== action.payload.id),
                },
            };
        case SOCKET_FAILURE:
            return {
                ...state,
                errors: [...state.errors, action.payload.message]
            }

        // Unsure if we need these...
        case EMIT_ROOM_DETAILS:
        case EMIT_ROOM_LIST:
        case EMIT_JOIN_ROOM:
        case EMIT_LEAVE_ROOM:
        case EMIT_SEND_MESSAGE:
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export type StateDefinition = ReturnType<typeof reducer>;

export default reducer;
