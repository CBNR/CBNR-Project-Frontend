import React, { FC, useState } from 'react'
import FormLogin from './FormLogin'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { USER_LOGIN_ACTION_CREATOR } from '../../store/actions';

const AVATAR_LENGTH = 5;

interface LoginFormProps {
    login: (username: string, avatarId: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({ login }) => {
    const [username, setUsername] = useState<string>("");
    const [avatarId, setAvatarId] = useState<number>(0);
    const [loginAttempt, setLoginAttempt] = useState<boolean>(false);


    const requestLogin = (username: string, avatarId: string) => {
        login(username, avatarId);
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    // Response to avatar icon selection
    const handleAvatarButtons = (next: boolean) => {   
        var id = avatarId + (next ? 1 : -1);

        if (id < 0) 
        {
            id = AVATAR_LENGTH - 1;
        } 
        else if (id >= AVATAR_LENGTH)
        {
            id = 0;
        }

        setAvatarId(id);
    }

    // Handles login when enter / login button is clicked on
    const handleLogin = () => {
        if (username){
            requestLogin(username, avatarId.toString());
        }
        return setLoginAttempt(true);
    };

    return (
        <FormLogin 
            handleUsernameChange={handleUsernameChange}
            handleLogin={handleLogin}
            handleAvatarButtons={handleAvatarButtons}
            username={username}
            avatarId={avatarId}
            loginAttempt={loginAttempt}
        />
    );   
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: (username: string, avatarId: string) => dispatch(USER_LOGIN_ACTION_CREATOR(username, avatarId)),
});

export default connect(null, mapDispatchToProps)(LoginForm);