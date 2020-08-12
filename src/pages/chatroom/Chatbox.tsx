import React, { FC, useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import Message from "../../models/message";
import ChatMessage from "./ChatMessage";
import { StateDefinition } from "../../store/reducer";
import { connect } from "react-redux";
import chatboxStyles from "./styles/chatbox";

interface ChatboxProperties {
    chatMessages: Message[],
}

const Chatbox: FC<ChatboxProperties> = ({ chatMessages }) => {
    const classes = chatboxStyles();
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [chatMessages]);

    return (
        <Box className={classes.chatbox}>
            {chatMessages.map(m => <ChatMessage key={m.id} message={m} />)}
            <div ref={endOfMessagesRef} />
        </Box>
    );
};

const mapStateToProps = (state: StateDefinition) => ({
    chatMessages: state.chatMessages,
});

export default connect(mapStateToProps)(Chatbox);
