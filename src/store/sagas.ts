import {
    all, takeEvery, put, call, take, fork,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import io from "socket.io-client";
import { USER_LOGIN, UserLoginAction, USER_LOGIN_SUCCESS } from "./actionTypes";
import { login as loginService } from "./service";
import {
    USER_LOGIN_SUCCESS_ACTION_CREATOR,
    USER_LOGIN_FAILURE_ACTION_CREATOR,
    SOCKET_ROOM_DETAILS_ACTION_CREATOR,
    SOCKET_ROOM_LIST_ACTION_CREATOR,
    SOCKET_JOIN_ROOM_ACTION_CREATOR,
    SOCKET_LEAVE_ROOM_ACTION_CREATOR,
    SOCKET_RECEIVE_MESSAGE_ACTION_CREATOR,
    SOCKET_USER_LEAVE_ACTION_CREATOR,
    SOCKET_USER_JOIN_ACTION_CREATOR,
    EMIT_ROOM_LIST_ACTION_CREATOR,
    SOCKET_FAILURE_ACTION_CREATOR
} from "./actions";
import { SERVER_URL } from "../config/config";
import Response from "../models/response";
import RoomListDTO from "../models/DTO/roomListDTO";
import MessageDTO from "../models/DTO/messageDTO";
import Room from "../models/room";
import User from "../models/user";

const connect = (): Promise<SocketIOClient.Socket> => {
    const socket = io(SERVER_URL, { transports: ["websocket"] });
    return new Promise(resolve => {
        socket.on("connect", () => {
            resolve(socket);
        });
    });
};

const subscribe = (socket: SocketIOClient.Socket) => eventChannel(
    emit => {
        const roomDetailsListener = (response: Response<Room>) => {
            if (response.success) {
                emit(SOCKET_ROOM_DETAILS_ACTION_CREATOR(response.obj));
            } else {
                emit(SOCKET_FAILURE_ACTION_CREATOR(response.msg));
            }
        };
        
        const roomListListener = (response: Response<RoomListDTO[]>) => {
            if (response.success) {
                emit(SOCKET_ROOM_LIST_ACTION_CREATOR(response.obj));
            } else {
                emit(SOCKET_FAILURE_ACTION_CREATOR(response.msg));
            }
        };

        const joinRoomListener = (response: Response<Room>) => {
            if (response.success) {
                emit(SOCKET_JOIN_ROOM_ACTION_CREATOR(response.obj));
            } else {
                emit(SOCKET_FAILURE_ACTION_CREATOR(response.msg));
            }
        };

        const leaveRoomListener = (response: Response) => {
            if (response.success) {
                emit(SOCKET_LEAVE_ROOM_ACTION_CREATOR());
            } else {
                emit(SOCKET_FAILURE_ACTION_CREATOR(response.msg));
            }
        };

        const chatMessageListener = (response: MessageDTO) => {
            emit(SOCKET_RECEIVE_MESSAGE_ACTION_CREATOR(response));
        };

        const userJoinListener = (response: User) => {
            emit(SOCKET_USER_JOIN_ACTION_CREATOR(response));
        };

        const userLeaveListener = (response: User) => {
            emit(SOCKET_USER_LEAVE_ACTION_CREATOR(response));
        };

        socket.on("room_details", roomDetailsListener);
        socket.on("room_list", roomListListener);
        socket.on("join_room", joinRoomListener);
        socket.on("leave_room", leaveRoomListener);
        socket.on("chat_msg", chatMessageListener);
        socket.on("user_join", userJoinListener);
        socket.on("user_leave", userLeaveListener);

        const disconnectListener = () => {};

        socket.on("disconnect", disconnectListener)

        return () => {
            socket.off("room_details", roomDetailsListener);
            socket.off("room_list", roomListListener);
            socket.off("join_room", joinRoomListener);
            socket.off("leave_room", leaveRoomListener);
            socket.off("chat_msg", chatMessageListener);
            socket.off("user_join", userJoinListener);
            socket.off("user_leave", userLeaveListener);
            socket.off("disconnect", disconnectListener);
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

function* write(socket, action) {
    const { payload } = action;
    yield socket.emit(payload.type, payload.emitPayload);
    if (action.type === "EMIT_ROOM_LEAVE") {
        const roomList = EMIT_ROOM_LIST_ACTION_CREATOR();
        yield socket.emit(roomList.payload.type, roomList.payload.emitPayload);
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

function* watchSocket() {
    const socket = yield call(connect);
    yield fork(read, socket)
    yield fork(watchWrite, socket);
    yield put(EMIT_ROOM_LIST_ACTION_CREATOR());
}

function* onLogin() {
    yield all([
        yield fork(watchSocket),
    ]);
}

function* watchLogin() {
    yield takeEvery(USER_LOGIN, login);
}

function* watchLoginSuccess() {
    yield takeEvery(USER_LOGIN_SUCCESS, onLogin);
}

function* watchWrite(socket) {
    yield takeEvery(action => /^EMIT_.*$/.test(action.type), write, socket);
}

export default function* saga() {
    yield all([
        yield fork(watchLogin),
        yield fork(watchLoginSuccess),
    ]);
}