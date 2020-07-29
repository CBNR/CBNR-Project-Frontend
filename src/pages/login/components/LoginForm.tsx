import React, { Component } from 'react'
import FormLogin from './FormLogin'


export class LoginForm extends Component {
    state = {
        username: '',
        errorUsernameField: false,
        loginStatus: false,
        loginAttempt: false,
    }

    // Communicates with backend?
    requestLogin = (username: string, password: string): boolean => {
        return false; // stub
    }

    // Handles changes in fields
    handleChange = (input: any) => (e: any) => {
        this.setState({[input]: e.target.value})
        console.log(this.state.username)
    }

    handleLogin = () => {

        const { username } = this.state;

        // this.setState({
        //     loginAttempt: true,
        // })

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
        const { username, loginStatus, errorUsernameField, loginAttempt } = this.state
        const values = { username, loginStatus, errorUsernameField, loginAttempt }

        return (
            <FormLogin 
                handleChange={this.handleChange}
                // changeMode={this.changeMode}
                handleLogin={this.handleLogin}
                // handleRemember={this.handleRemember}
                values={values}
            />
        );   
    }
}
export default LoginForm