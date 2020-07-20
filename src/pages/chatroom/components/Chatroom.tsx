import React, { FC } from "react";
import ChatroomHeader from "./ChatroomHeader";
import { Container } from "@material-ui/core";
import ChatroomInput from "./ChatroomInput";
import Chatbox from "./Chatbox";
import { StateDefinition } from "../../../store/reducer";
import { connect } from "react-redux";
import Message from "../../../models/message";

interface ChatroomProps {
    chatMessages: Message[];
}

const Chatroom: FC<ChatroomProps> = ({ chatMessages }) => {
    return (
        <Container>
            <ChatroomHeader title="CBNR" />
            <Chatbox chatMessages={chatMessages} />
            <ChatroomInput />
        </Container>
    );
}

const mapStateToProps = (state: StateDefinition) => ({
    chatMessages: state.chatMessages,
});

export default connect(mapStateToProps, null)(Chatroom);