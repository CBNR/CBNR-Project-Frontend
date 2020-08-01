import React, { Component } from 'react'
import FormLogin from './FormLogin'

const AVATAR_LENGTH = 5;

export class LoginForm extends Component {
   
    state = {
        username: '',
        errorUsernameField: false,
        loginStatus: false,
        loginAttempt: false,
        avatarId: 0,
    }

    // Communicates with backend?
    requestLogin = (username: string, password: string): boolean => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: '',
                username: this.state.username, 
                avatarId: this.state.avatarId.toString(),
            })
        };
        fetch('http://cbnr-project.net:3001/login', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(() => console.log("error"))

        return false;
    }

    // Handles changes in fields
    handleChange = (input: any) => (e: any) => {
        this.setState({[input]: e.target.value})
    }

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

        console.log(this.state.avatarId)
    }

    handleLogin = () => {

        const { username } = this.state;

        if (username !== ''){
            var status = this.requestLogin(username, '');
            if (!status){
                this.setState({
                    loginStatus: status,
                    loginAttempt: true,
                    errorUsernameField: false,
                }); 
                return;
            }
        };
    
        this.setState({
            errorUsernameField: (username === ''),
        });
        return; 

    }

    render() {
        const { username, loginStatus, errorUsernameField, loginAttempt, avatarId } = this.state
        const values = { username, loginStatus, errorUsernameField, loginAttempt, avatarId }

        return (
            <FormLogin 
                handleChange={this.handleChange}
                // changeMode={this.changeMode}
                handleLogin={this.handleLogin}
                handleAvatarButtons={this.handleAvatarButtons}
                // handleRemember={this.handleRemember}
                values={values}
            />
        );   
    }
}
export default LoginForm