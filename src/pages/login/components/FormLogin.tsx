import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'; 
// import {
//     FacebookLoginButton,
//     GoogleLoginButton,
//   } from "react-social-login-buttons";
import { useStyles } from './styles/login'

export default function FormLogin(props: any): any {
    const classes = useStyles();

    const { handleChange, handleLogin, values } = props

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar></Avatar>
                <br/>
                <Typography variant="h5">
                    Pick a username
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    onChange={handleChange('username')}
                >
                </TextField>

                { values.errorUsernameField ? (
                <Typography color='error'>
                    Type in an username you jaffy!
                </Typography>
                ) : (!values.loginStatus && values.loginAttempt ? (
                <Typography color='error'>
                    Login failed
                </Typography>
                ) : null ) }

                {console.log("hey"+values.errorUsernameField)}
                
                <Button
                // type="submit"
                size="large"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
        </Container>
    )

    // return (
    //     <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <div className={classes.paper}>

    //         <Avatar className={classes.avatar}>
    //             <LockIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //         Sign in
    //         </Typography>
            
    //         <br/>
    //         { values.errorLogin ? (
    //             <Typography color='error'>
    //                 Username or password is incorrect
    //             </Typography>
    //         ) : null }
            
    //         <form className={classes.form} noValidate>
    //         <TextField
    //             variant="outlined"
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="username"
    //             label="Username"
    //             name="username"
    //             autoComplete="username"
    //             autoFocus
    //             onChange={handleChange('username')}
    //             error={values.errorUsername}
    //         />
    //         { values.errorUsername ? (
    //             <Typography color='error'>
    //             Username field is required
    //             </Typography>
    //         ) : null }
    //         <TextField
    //             variant="outlined"
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //             onChange={handleChange('password')}
    //             error={values.errorPassword}
    //         />
    //         { values.errorPassword ? (
    //             <Typography color='error'>
    //             Password field is required
    //             </Typography>
    //         ) : null }
            
    //         <FormControlLabel
    //             control={<Checkbox value="remember" color="primary" />}
    //             label="Remember me"
    //             checked={values.rememberMe}
    //             onChange={handleRemember}
    //         />
            
    //         <Button
    //             // type="submit"
    //             size="large"
    //             fullWidth
    //             variant="contained"
    //             color="primary"
    //             className={classes.submit}
    //             onClick={handleLogin}
    //         >
    //             Sign in
    //         </Button>
            
    //         {/* hacky hack hack?? paddingBottom */}
    //         <Grid container style={{paddingBottom: 20}}>
    //             <Grid item xs>
    //             <Link 
    //                 href="#" variant="body2"
    //                 onClick={() => changeMode(Modes.RESET_PASSWORD)}
    //             >
    //                 {"Forgot password?"}
    //             </Link>
    //             </Grid>
    //             <Grid item xs>
    //             <Link 
    //                 href="#" variant="body2"
    //                 onClick={() => changeMode(Modes.REGISTER)}
    //             >
    //                 {"Don't have an account?"}
    //             </Link>
    //             </Grid>
    //         </Grid>

    //         <GoogleLoginButton 
    //             text="Sign in with Google"
    //         />
    //         <FacebookLoginButton 
    //             text="Sign in with Facebook"
    //         />
    //         </form>
    //     </div>
    //     </Container>
    // )
}

// export default FormLogin