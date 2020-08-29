import React, { FC, useState } from "react";
import { InputBase, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Dispatch } from "redux";
import { EMIT_SEND_MESSAGE_ACTION_CREATOR } from "../../store/actions";
import { connect } from "react-redux";
import inputStyles from "./styles/chatroomInput";

interface ChatroomInputProps {
    sendMessage: (message: string) => void;
}

const ChatroomInput: FC<ChatroomInputProps> = ({ sendMessage }) => {
    const [text, setText] = useState<string>("");
    const classes = inputStyles();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const onSubmit = () => {
        if (text) {
            sendMessage(text);
            setText("");
        }
    };

    return (
        <>
            <div className={classes.container}>
                <InputBase
                    value={text}
                    placeholder={"Send a message"}
                    onKeyPress={(event) => (event.key === "Enter" && onSubmit())}
                    onChange={onChange}
                    className={classes.input}
                />
                <IconButton onClick={onSubmit} className={classes.button}>
                    <SendIcon fontSize="small"/>
                </IconButton>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendMessage: (message: string) => dispatch(EMIT_SEND_MESSAGE_ACTION_CREATOR(message)),
});

export default connect(null, mapDispatchToProps)(ChatroomInput);
