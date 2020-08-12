import {
    all, takeEvery, put
} from "redux-saga/effects";
import { USER_LOGIN, UserLoginAction } from "./actionTypes";
import { USER_LOGIN_SUCCESS_ACTION_CREATOR, USER_LOGIN_FAILURE_ACTION_CREATOR } from "./actions";

function* login(action: UserLoginAction) {
    try {
        yield put(USER_LOGIN_SUCCESS_ACTION_CREATOR({ id: "239823", name: action.payload.username, avatarId: action.payload.avatarId }));
    } catch (error) {
        yield put(USER_LOGIN_FAILURE_ACTION_CREATOR(error.message));
    }
}

function* watchLogin() {
    yield takeEvery(USER_LOGIN, login);
}

export default function* saga() {
    yield all([
        watchLogin(),
    ]);
}