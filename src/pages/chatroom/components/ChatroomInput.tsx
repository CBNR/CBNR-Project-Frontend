import React, { FC, useState } from "react";
import { OutlinedInput } from "@material-ui/core";
import { Dispatch } from "redux";
import { SEND_MESSAGE_ACTION_CREATOR } from "../../../store/actions";
import { connect } from "react-redux";

interface ChatroomInputProps {
    sendMessage: (message: string) => void;
}

const ChatroomInput: FC<ChatroomInputProps> = ({ sendMessage }) => {
    const [text, setText] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const onSubmit = () => {
        sendMessage(text);
        setText("");
    };

    return (
        <OutlinedInput
            value={text}
            placeholder={"Send a message"}
            onKeyPress={(event) => (event.key === "Enter" && onSubmit())}
            onChange={onChange}
        />
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendMessage: (message: string) => dispatch(SEND_MESSAGE_ACTION_CREATOR(message)),
});

export default connect(null, mapDispatchToProps)(ChatroomInput);
