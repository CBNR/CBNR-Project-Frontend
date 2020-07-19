import React, { FC } from "react";
import { Container, Typography } from "@material-ui/core";

interface ChatroomHeaderProps {
    title: string;
}

const ChatroomHeader: FC<ChatroomHeaderProps> = ({ title }) => (
    <Container>
        <Typography>
            {title}
        </Typography>
    </Container>
);

export default ChatroomHeader;
