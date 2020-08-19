import User from "../models/user";
import Message from "../models/message";
import RoomListDTO from "../models/DTO/roomListDTO";
import MessageDTO from "../models/DTO/messageDTO";
import Room from "../models/room";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export const SOCKET_ROOM_LIST = "SOCKET_ROOM_LIST";
export const SOCKET_ROOM_DETAILS = "SOCKET_ROOM_DETAILS";
export const SOCKET_JOIN_ROOM = "SOCKET_JOIN_ROOM";
export const SOCKET_LEAVE_ROOM = "SOCKET_LEAVE_ROOM";
export const SOCKET_RECEIVE_MESSAGE = "SOCKET_RECEIVE_MESSAGE";
export const SOCKET_USER_JOIN = "SOCKET_USER_JOIN";
export const SOCKET_USER_LEAVE = "SOCKET_USER_LEAVE";

export const EMIT_ROOM_LIST = "EMIT_ROOM_LIST";
export const EMIT_ROOM_DETAILS = "EMIT_ROOM_DETAILS";
export const EMIT_JOIN_ROOM = "EMIT_JOIN_ROOM";
export const EMIT_LEAVE_ROOM = "EMIT_LEAVE_ROOM";
export const EMIT_SEND_MESSAGE = "EMIT_SEND_MESSAGE";

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
    payload: Room;
}

export interface SocketJoinRoomAction {
    type: typeof SOCKET_JOIN_ROOM;
    payload: Room;
}

export interface SocketLeaveRoomAction {
    type: typeof SOCKET_LEAVE_ROOM;
}

export interface SocketReceiveMessageAction {
    type: typeof SOCKET_RECEIVE_MESSAGE;
    payload: MessageDTO;
}

export interface SocketUserJoinAction {
    type: typeof SOCKET_USER_JOIN;
    payload: User;
}

export interface SocketUserLeaveAction {
    type: typeof SOCKET_USER_LEAVE;
    payload: User;
}

export interface EmitRoomListAction {
    type: typeof EMIT_ROOM_LIST;
    payload: {
        type: "room_list";
        emitPayload: {};
    };
}

export interface EmitRoomDetailsAction {
    type: typeof EMIT_ROOM_DETAILS;
    payload: {
        type: "room_details";
        emitPayload: {};
    };
}

export interface EmitJoinRoomAction {
    type: typeof EMIT_JOIN_ROOM;
    payload: {
        type: "join_room";
        emitPayload: {
            roomId: string;
        };
    };
}

export interface EmitLeaveRoomAction {
    type: typeof EMIT_LEAVE_ROOM;
    payload: {
        type: "leave_room";
        emitPayload: {};
    };
}

export interface EmitSendMessageAction {
    type: typeof EMIT_SEND_MESSAGE;
    payload: {
        type: "chat_msg";
        emitPayload: {
            message: string;
        };
    };
}

export type ActionTypes =
    AddMessageAction |
    UserLoginAction |
    UserLoginSuccessAction |
    UserLoginFailureAction |
    ClearMessagesAction |
    SocketRoomDetailsAction |
    SocketRoomListAction |
    SocketJoinRoomAction |
    SocketLeaveRoomAction |
    SocketReceiveMessageAction |
    SocketUserJoinAction |
    SocketUserLeaveAction |
    EmitJoinRoomAction |
    EmitLeaveRoomAction |
    EmitRoomDetailsAction |
    EmitRoomListAction |
    EmitSendMessageAction;
