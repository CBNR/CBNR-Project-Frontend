import React, { FC } from "react";
import { Container } from "@material-ui/core";
import Message from "../../../models/message";
import ChatMessage from "./ChatMessage";
import { StateDefinition } from "../../../store/reducer";
import { connect } from "react-redux";

interface ChatboxProperties {
    chatMessages: Message[],
}

const Chatbox: FC<ChatboxProperties> = ({ chatMessages }) => {
    return (
        <Container maxWidth="sm">
            {chatMessages.map(m => <ChatMessage key={m.id} message={m} />)}
        </Container>
    );
};

const mapStateToProps = (state: StateDefinition) => ({
    chatMessages: state.chatMessages,
});

export default connect(mapStateToProps)(Chatbox);
