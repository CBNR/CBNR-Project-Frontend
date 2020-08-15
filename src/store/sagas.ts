import {
    all, takeEvery, put, call, take, fork,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import io from "socket.io-client";
import { USER_LOGIN, UserLoginAction } from "./actionTypes";
import { login as loginService } from "./service";
import {
    USER_LOGIN_SUCCESS_ACTION_CREATOR,
    USER_LOGIN_FAILURE_ACTION_CREATOR,
    SOCKET_ROOM_DETAILS_ACTION_CREATOR,
    SOCKET_ROOM_LIST_ACTION_CREATOR,
    SOCKET_JOIN_ROOM_ACTION_CREATOR,
    SOCKET_LEAVE_ROOM_ACTION_CREATOR,
    SOCKET_SEND_MESSAGE_ACTION_CREATOR,
    SOCKET_RECEIVE_MESSAGE_ACTION_CREATOR
} from "./actions";
import { SERVER_URL } from "../config/config";
import RoomDetailsDTO from "../models/DTO/roomDetailsDTO";
import Response from "../models/response";
import RoomListDTO from "../models/DTO/roomListDTO";
import MessageDTO from "../models/DTO/messageDTO";

const connect = (): Promise<SocketIOClient.Socket> => {
    const socket = io(SERVER_URL);
    return new Promise(resolve => {
        socket.on("connect", () => {
            resolve(socket);
        });
    });
};

const subscribe = (socket: SocketIOClient.Socket) => eventChannel(
    emit => {
        const roomDetailsListener = (response: Response<RoomDetailsDTO>) => { emit(SOCKET_ROOM_DETAILS_ACTION_CREATOR(response.obj)) };
        const roomListListener = (response: Response<RoomListDTO[]>) => { emit(SOCKET_ROOM_LIST_ACTION_CREATOR(response.obj)) };
        const joinRoomListener = (response: Response) => { emit(SOCKET_JOIN_ROOM_ACTION_CREATOR()) };
        const leaveRoomListener = (response: Response) => { emit(SOCKET_LEAVE_ROOM_ACTION_CREATOR()) };
        const sendMessageListener = (response: Response) => { emit(SOCKET_SEND_MESSAGE_ACTION_CREATOR()) };
        const receiveMessageListener = (response: Response<MessageDTO>) => { emit(SOCKET_RECEIVE_MESSAGE_ACTION_CREATOR(response.obj)) };

        socket.on("room_details", roomDetailsListener);
        socket.on("room_list", roomListListener);
        socket.on("join_room", joinRoomListener);
        socket.on("leave_room", leaveRoomListener);
        socket.on("send_msg", sendMessageListener);
        socket.on("rcv_msg", receiveMessageListener);

        return () => {
            socket.off("room_details", roomDetailsListener);
            socket.off("room_list", roomListListener);
            socket.off("join_room", joinRoomListener);
            socket.off("leave_room", leaveRoomListener);
            socket.off("send_msg", sendMessageListener);
            socket.off("rcv_msg", receiveMessageListener);
        }
    }
);

function* read(socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}


function* login(action: UserLoginAction) {
    try {
        const userId = yield call(loginService, action.payload.username, action.payload.avatarId);
        yield put(USER_LOGIN_SUCCESS_ACTION_CREATOR({ id: userId, name: action.payload.username, avatarId: action.payload.avatarId }));
    } catch (error) {
        yield put(USER_LOGIN_FAILURE_ACTION_CREATOR(error.message));
    }
}

function* watchLogin() {
    yield takeEvery(USER_LOGIN, login);
}

function* readWrite(socket) {
    yield fork(read, socket);
}

function* socketFlow() {
    while (true) {
        const socket = yield call(connect);
        yield fork(readWrite, socket);
    }
}

export default function* saga() {
    yield all([
        fork(watchLogin),
        fork(socketFlow),
    ]);
}