import { SendMessageAction, SEND_MESSAGE, UserLoginAction, USER_LOGIN, UserLoginSuccessAction, USER_LOGIN_SUCCESS, UserLoginFailureAction, USER_LOGIN_FAILURE, ClearMessagesAction, CLEAR_MESSAGES, AddMessageAction, ADD_MESSAGE, SocketRoomDetailsAction, SOCKET_RECEIVE_MESSAGE, SOCKET_ROOM_DETAILS, SocketRoomListAction, SOCKET_ROOM_LIST, SOCKET_JOIN_ROOM, SocketJoinRoomAction, SocketLeaveRoomAction, SOCKET_LEAVE_ROOM, SocketSendMessageAction, SOCKET_SEND_MESSAGE, SocketReceiveMessageAction } from "./actionTypes";
import User from "../models/user";
import Message from "../models/message";
import RoomDetailsDTO from "../models/DTO/roomDetailsDTO";
import RoomListDTO from "../models/DTO/roomListDTO";
import MessageDTO from "../models/DTO/messageDTO";

export const SEND_MESSAGE_ACTION_CREATOR = (message: string): SendMessageAction => ({
    type: SEND_MESSAGE,
    payload: {
        message,
    },
});

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

export const SOCKET_ROOM_DETAILS_ACTION_CREATOR = (roomDetails: RoomDetailsDTO): SocketRoomDetailsAction => ({
    type: SOCKET_ROOM_DETAILS,
    payload: roomDetails,
});

export const SOCKET_ROOM_LIST_ACTION_CREATOR = (roomList: RoomListDTO[]): SocketRoomListAction => ({
    type: SOCKET_ROOM_LIST,
    payload: roomList,
});

export const SOCKET_JOIN_ROOM_ACTION_CREATOR = (): SocketJoinRoomAction => ({
    type: SOCKET_JOIN_ROOM,
});

export const SOCKET_LEAVE_ROOM_ACTION_CREATOR = (): SocketLeaveRoomAction => ({
    type: SOCKET_LEAVE_ROOM,
});

export const SOCKET_SEND_MESSAGE_ACTION_CREATOR = (): SocketSendMessageAction => ({
    type: SOCKET_SEND_MESSAGE,
});

export const SOCKET_RECEIVE_MESSAGE_ACTION_CREATOR = (message: MessageDTO): SocketReceiveMessageAction => ({
    type: SOCKET_RECEIVE_MESSAGE,
    payload: message,
});


