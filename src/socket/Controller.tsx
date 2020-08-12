import { FC } from "react";
import socket from "./socketClient";
import { Dispatch } from "redux";
import { ADD_MESSAGE_ACTION_CREATOR } from "../store/actions";
import { connect } from "react-redux";
import { StateDefinition } from "../store/reducer";
import User from "../models/user";
import Message from "../models/message";
import ReceievedMessage from "../models/receievedMessage";
import Response from "../models/response";

interface ControllerProps {
    userList: User[];
    addMessage: (message: Message) => void;
}

const Controller: FC<ControllerProps> = ({
    userList,
    addMessage,
}) => {
    socket.on("rcv_msg", (response: Response<ReceievedMessage>) => {
        if (!response.success) {
            return;
        }

        const sendingUser = userList.find((user) => user.id === response.obj.senderId);
        if (!sendingUser) {
            return;
        }

        const message: Message = {
            timestamp: response.obj.time,
            user: sendingUser,
            text: response.obj.message,
            id: response.obj.messageId,
        };
        addMessage(message);
    });

    return null;
};

const mapStoreToProps = (state: StateDefinition) => ({
    userList: state.userList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addMessage: (message: Message) => dispatch(ADD_MESSAGE_ACTION_CREATOR(message)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Controller);
