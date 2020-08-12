import React, { Component } from 'react'
import FormLogin from './FormLogin'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { USER_LOGIN_ACTION_CREATOR } from '../../store/actions';

const AVATAR_LENGTH = 5;

interface LoginFormProps {
    login: (username: string, avatarId: string) => void;
}

class LoginForm extends Component<LoginFormProps> {
   
    state = {
        username: '',
        avatarId: 0,
        errorUsernameField: false,
        loginStatus: false,
        loginAttempt: false,
    }


    requestLogin = (username: string, avatarId: string) => {
        this.props.login(username, avatarId);
    }

    // Handles changes in fields
    handleChange = (input: any) => (e: any) => {
        this.setState({[input]: e.target.value})
    }

    // Response to avatar icon selection
    handleAvatarButtons = (next: boolean) => {
        const { avatarId } = this.state;
        
        var id = avatarId + (next ? 1 : -1);

        if (id < 0) 
        {
            id = AVATAR_LENGTH - 1;
        } 
        else if (id >= AVATAR_LENGTH)
        {
            id = 0;
        }

        this.setState({
            avatarId: id,
        })
    }

    // Handles login when enter / login button is clicked on
    handleLogin = () => {

        const { username, avatarId } = this.state;

        
        if (username !== ''){
            this.requestLogin(username, avatarId.toString());

            // Unsuccessful login
           this.setState({
                loginAttempt: true,
                errorUsernameField: false,
            }); 
            
        }
        // username field left blank
        else 
        {
            this.setState({
                errorUsernameField: (username === ''),
            });
        }

        return;
    }

    render() {
        const { username, loginStatus, errorUsernameField, loginAttempt, avatarId } = this.state
        const values = { username, loginStatus, errorUsernameField, loginAttempt, avatarId }

        return (
            <FormLogin 
                handleChange={this.handleChange}
                handleLogin={this.handleLogin}
                handleAvatarButtons={this.handleAvatarButtons}
                values={values}
            />
        );   
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: (username: string, avatarId: string) => dispatch(USER_LOGIN_ACTION_CREATOR(username, avatarId)),
});

export default connect(null, mapDispatchToProps)(LoginForm);