import User from "../models/user";
import Message from "../models/message";
import RoomListDTO from "../models/DTO/roomListDTO";
import RoomDetailsDTO from "../models/DTO/roomDetailsDTO";
import MessageDTO from "../models/DTO/messageDTO";

export const SEND_MESSAGE = "SEND_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export const SOCKET_ROOM_LIST = "SOCKET_ROOM_LIST";
export const SOCKET_ROOM_DETAILS = "SOCKET_ROOM_DETAILS";
export const SOCKET_JOIN_ROOM = "SOCKET_JOIN_ROOM";
export const SOCKET_LEAVE_ROOM = "SOCKET_LEAVE_ROOM";
export const SOCKET_SEND_MESSAGE = "SOCKET_SEND_MESSAGE";
export const SOCKET_RECEIVE_MESSAGE = "SOCKET_RECEIVE_MESSAGE";

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

export interface SocketRoomListAction {
    type: typeof SOCKET_ROOM_LIST;
    payload: RoomListDTO[];
}

export interface SocketRoomDetailsAction {
    type: typeof SOCKET_ROOM_DETAILS;
    payload: RoomDetailsDTO;
}

export interface SocketJoinRoomAction {
    type: typeof SOCKET_JOIN_ROOM;
}

export interface SocketLeaveRoomAction {
    type: typeof SOCKET_LEAVE_ROOM;
}

export interface SocketSendMessageAction {
    type: typeof SOCKET_SEND_MESSAGE;
}

export interface SocketReceiveMessageAction {
    type: typeof SOCKET_RECEIVE_MESSAGE;
    payload: MessageDTO;
}

export type ActionTypes = 
    SendMessageAction |
    AddMessageAction |
    UserLoginAction |
    UserLoginSuccessAction |
    UserLoginFailureAction |
    ClearMessagesAction |
    SocketRoomDetailsAction |
    SocketRoomListAction |
    SocketJoinRoomAction |
    SocketLeaveRoomAction |
    SocketSendMessageAction |
    SocketReceiveMessageAction;
