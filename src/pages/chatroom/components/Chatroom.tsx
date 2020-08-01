import React, { FC } from "react";
import { Container } from "@material-ui/core";
import ChatroomInput from "./ChatroomInput";
import Chatbox from "./Chatbox";
import chatroomStyles from "./styles/chatroom";

interface ChatroomProps {}

const Chatroom: FC<ChatroomProps> = () => {
    const classes = chatroomStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Chatbox />
            <ChatroomInput />
        </Container>
    );
}


export default Chatroom