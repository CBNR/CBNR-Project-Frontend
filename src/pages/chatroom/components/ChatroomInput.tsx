import React, { FC } from "react";
import { OutlinedInput } from "@material-ui/core";

interface ChatroomInputProps {
    onSubmit: () => void;
}

const ChatroomInput: FC<ChatroomInputProps> = ({ onSubmit }) => (
    <OutlinedInput onSubmit={onSubmit} />
);

export default ChatroomInput;
