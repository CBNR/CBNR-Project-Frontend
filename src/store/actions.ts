import { SendMessageAction, SEND_MESSAGE } from "./actionTypes";
export const SEND_MESSAGE_ACTION_CREATOR = (message: string): SendMessageAction => ({
    type: SEND_MESSAGE,
    payload: {
        message,
    },
});
