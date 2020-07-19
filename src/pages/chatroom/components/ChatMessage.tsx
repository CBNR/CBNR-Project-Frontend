import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";
import Message from "../../../models/message";

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {message.user.name}
                </Typography>
                <Typography>
                    {message.text}
                </Typography>
            </CardContent>
        </Card>
    )
}; 

export default ChatMessage;
