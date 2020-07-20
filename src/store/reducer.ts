import { ActionTypes, SEND_MESSAGE } from "./actionTypes";
import { createStore } from "redux";
import Message from "../models/message";

export const initialState = {
    username: "",
    chatMessages: [] as Message[],
};

const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return state;
        default:
            return state;
    }
};

export const store = createStore(reducer);
export type StateDefinition = ReturnType<typeof reducer>;

export default reducer;
