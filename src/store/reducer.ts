import { ActionTypes, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, CLEAR_MESSAGES, SOCKET_LEAVE_ROOM, SOCKET_JOIN_ROOM, SOCKET_ROOM_DETAILS, SOCKET_ROOM_LIST, SOCKET_RECEIVE_MESSAGE, EMIT_ROOM_DETAILS, EMIT_ROOM_LIST, EMIT_JOIN_ROOM, EMIT_LEAVE_ROOM, EMIT_SEND_MESSAGE, SOCKET_USER_JOIN, SOCKET_USER_LEAVE } from "./actionTypes";
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
    userList: [] as User[],
    inProgressLogin: false,
    currentUser: undefined as User | undefined,
    roomList: [{
        id: "TESTBLDG1",
        name: "Campus Centre",
        type: "BUILDING",
        userCount: 12,
    }, {
        id: "TESTBLDG2",
        name: "Menzies",
        type: "BUILDING",
        userCount: 10,
    }, {
        id: "TESTBLDG3",
        name: "Learning and Teaching Building",
        type: "BUILDING",
        userCount: 0,
    }, {
        id: "TESTBLDG4",
        name: "Matheson Library",
        type: "BUILDING",
        userCount: 23,
    }, {
        id: "TESTBLDG5",
        name: "Hargrave-Andrew Library",
        type: "BUILDING",
        userCount: 5,
    }] as RoomListDTO[],
};

const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
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

        // Socket events
        case SOCKET_JOIN_ROOM:
            return {
                ...state,
                currentRoom: action.payload,
                userList: action.payload.connectedUsers,
            };
        case SOCKET_LEAVE_ROOM:
            return {
                ...state,
                currentRoom: undefined,
                userList: [],
                chatMessages: [],
            };
        case SOCKET_ROOM_DETAILS:
            return {
                ...state,
                currentRoom: action.payload,
                userList: action.payload.connectedUsers,
            };
        case SOCKET_ROOM_LIST:
            return {
                ...state,
                roomList: action.payload,
            };
        case SOCKET_RECEIVE_MESSAGE: {
            const sendingUser = state.userList.find(user => user.id === action.payload.senderId);
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
                userList: [...state.userList, action.payload],
            };
        case SOCKET_USER_LEAVE:
            return {
                ...state,
                userList: state.userList.filter(user => user.id !== action.payload.id),
            };

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
