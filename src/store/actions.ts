import {
    UserLoginAction,
    USER_LOGIN,
    UserLoginSuccessAction,
    USER_LOGIN_SUCCESS,
    UserLoginFailureAction,
    USER_LOGIN_FAILURE,
    ClearMessagesAction,
    CLEAR_MESSAGES,
    AddMessageAction,
    ADD_MESSAGE,
    SocketRoomDetailsAction,
    SOCKET_RECEIVE_MESSAGE,
    SOCKET_ROOM_DETAILS,
    SocketRoomListAction,
    SOCKET_ROOM_LIST,
    SOCKET_JOIN_ROOM,
    SocketJoinRoomAction,
    SocketLeaveRoomAction,
    SOCKET_LEAVE_ROOM,
    SocketReceiveMessageAction,
    EmitRoomDetailsAction,
    EMIT_ROOM_DETAILS,
    EmitRoomListAction,
    EMIT_ROOM_LIST,
    EmitJoinRoomAction,
    EMIT_JOIN_ROOM,
    EmitLeaveRoomAction,
    EMIT_LEAVE_ROOM,
    EmitSendMessageAction,
    EMIT_SEND_MESSAGE,
    SOCKET_USER_JOIN,
    SOCKET_USER_LEAVE,
    SocketUserLeaveAction,
    SocketUserJoinAction
} from "./actionTypes";
import User from "../models/user";
import Message from "../models/message";
import RoomListDTO from "../models/DTO/roomListDTO";
import MessageDTO from "../models/DTO/messageDTO";
import Room from "../models/room";

export const ADD_MESSAGE_ACTION_CREATOR = (message: Message): AddMessageAction => ({
    type: ADD_MESSAGE,
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

export const SOCKET_ROOM_DETAILS_ACTION_CREATOR = (roomDetails: Room): SocketRoomDetailsAction => ({
    type: SOCKET_ROOM_DETAILS,
    payload: roomDetails,
});

export const SOCKET_ROOM_LIST_ACTION_CREATOR = (roomList: RoomListDTO[]): SocketRoomListAction => ({
    type: SOCKET_ROOM_LIST,
    payload: roomList,
});

export const SOCKET_JOIN_ROOM_ACTION_CREATOR = (roomDetails: Room): SocketJoinRoomAction => ({
    type: SOCKET_JOIN_ROOM,
    payload: roomDetails,
});

export const SOCKET_LEAVE_ROOM_ACTION_CREATOR = (): SocketLeaveRoomAction => ({
    type: SOCKET_LEAVE_ROOM,
});

export const SOCKET_RECEIVE_MESSAGE_ACTION_CREATOR = (message: MessageDTO): SocketReceiveMessageAction => ({
    type: SOCKET_RECEIVE_MESSAGE,
    payload: message,
});

export const SOCKET_USER_JOIN_ACTION_CREATOR = (user: User): SocketUserJoinAction => ({
    type: SOCKET_USER_JOIN,
    payload: user,
});

export const SOCKET_USER_LEAVE_ACTION_CREATOR = (user: User): SocketUserLeaveAction => ({
    type: SOCKET_USER_LEAVE,
    payload: user,
})

export const EMIT_ROOM_DETAILS_ACTION_CREATOR = (): EmitRoomDetailsAction => ({
    type: EMIT_ROOM_DETAILS,
    payload: {
        type: "room_details",
        emitPayload: {},
    },
});

export const EMIT_ROOM_LIST_ACTION_CREATOR = (): EmitRoomListAction => ({
    type: EMIT_ROOM_LIST,
    payload: {
        type: "room_list",
        emitPayload: {},
    },
});

export const EMIT_JOIN_ROOM_ACTION_CREATOR = (roomId: string): EmitJoinRoomAction => ({
    type: EMIT_JOIN_ROOM,
    payload: {
        type: "join_room",
        emitPayload: { roomId },
    },
});

export const EMIT_LEAVE_ROOM_ACTION_CREATOR = (): EmitLeaveRoomAction => ({
    type: EMIT_LEAVE_ROOM,
    payload: {
        type: "leave_room",
        emitPayload: {},
    },
});

export const EMIT_SEND_MESSAGE_ACTION_CREATOR = (message: string): EmitSendMessageAction => ({
    type: EMIT_SEND_MESSAGE,
    payload: {
        type: "chat_msg",
        emitPayload: { message },
    },
});


