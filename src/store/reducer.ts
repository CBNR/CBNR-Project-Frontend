import { ActionTypes, SEND_MESSAGE } from "./actionTypes";
import { createStore } from "redux";
import Message from "../models/message";
import User from "../models/user";

export const initialState = {
    username: "",
    chatMessages: [] as Message[],
};

const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                chatMessages: [...state.chatMessages, { id: "Temp", user: { name: "Temp" } as User, timestamp: "Temp", text: action.payload.message}],
            };
        default:
            return state;
    }
};

export const store = createStore(reducer);
export type StateDefinition = ReturnType<typeof reducer>;

export default reducer;
