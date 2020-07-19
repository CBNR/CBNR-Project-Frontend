import React, { FC } from "react";
import ChatroomHeader from "./ChatroomHeader";
import { Container } from "@material-ui/core";
import ChatroomInput from "./ChatroomInput";
import Chatbox from "./Chatbox";

interface ChatroomProps {

}

const Chatroom: FC<ChatroomProps> = () => {
    return (
        <Container>
            <ChatroomHeader title="CBNR" />
            <Chatbox chatMessages={[]} />
            <ChatroomInput onSubmit={() => {}} />
        </Container>
    )
}

export default Chatroom;