import React, { Component } from 'react'
import FormLogin from './FormLogin'

const AVATAR_LENGTH = 5;

export class LoginForm extends Component {
   
    state = {
        username: '',
        avatarId: 0,
        errorUsernameField: false,
        loginStatus: false,
        loginAttempt: false,
    }


    requestLogin = (username: string, password: string) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: this.state.username, 
                avatarId: this.state.avatarId.toString(),
            })
        };
        fetch('http://cbnr-project.net:3001/login', requestOptions)
            .then(response => response.json())
            .then(data => {this.setState({loginStatus: true})}) // no errors
            .catch(() => {this.setState({loginStatus: false})}) // errors

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

        const { username } = this.state;

        
        if (username !== ''){
            this.requestLogin(username, '');

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
export default LoginForm