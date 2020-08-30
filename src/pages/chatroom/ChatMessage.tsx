import React, { FC } from "react";
import { Typography, Avatar, Paper } from "@material-ui/core";
import Message from "../../models/message";
import messageStyles from "./styles/chatMessage";

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
    const classes = messageStyles();
    
    const getTime = (timestamp: string) => {
        const date = new Date(timestamp);
        return `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`;
    }

    return (
        <Paper className={classes.container} square>
            <Avatar
                alt="User avatar"
                src={`/image/avatar/avatar_${message.user.avatarId}.jpg`}
            />
            <div className={classes.textContainer}>
                <div className={classes.header}>
                    <Typography className={classes.name}>
                        {message.user.name}
                    </Typography>
                    <Typography variant="body2">
                        {getTime(message.timestamp)}
                    </Typography>
                </div>
                <Typography>
                    {message.text}
                </Typography>
            </div>
        </Paper>
    )
}; 

export default ChatMessage;
