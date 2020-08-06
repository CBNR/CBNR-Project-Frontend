import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'; 
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { ArrowLeft, ArrowRight } from '@material-ui/icons/'
// import {
//     FacebookLoginButton,
//     GoogleLoginButton,
//   } from "react-social-login-buttons";
import { useStyles } from './styles/login'
// import { Grid } from '@material-ui/core';

export default function FormLogin(props: any): any {
    const classes = useStyles();

    const { handleChange, handleLogin, handleAvatarButtons, values } = props

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                {/* Error messages */}
                { values.errorUsernameField ? (
                <Typography color='error'>
                    Type in an username, you jaffy!
                </Typography>
                ) : ((!values.loginStatus) && values.loginAttempt ? (
                <Typography color='error'>
                    Login failed
                </Typography>
                ) : null ) }


                <Grid container className={classes.wrapper}>    
                    <Grid item spacing={4}>
                        <IconButton 
                            aria-label="previous" 
                            className={classes.arrowButtons}
                            disableRipple={true}
                            onClick={() => handleAvatarButtons(false)}
                        >
                            <ArrowLeft className={classes.arrow}/>
                        </IconButton>
                    </Grid>
                    <Grid item spacing={4}>
                        <Avatar alt="Selected avatar" src={"/image/avatar/avatar_" + values.avatarId + ".jpg"} className={classes.avatar}></Avatar>
                    </Grid>
                    <Grid item spacing={4}>
                        <IconButton 
                            aria-label="next" 
                            className={classes.arrowButtons}
                            disableRipple={true}
                            onClick={() => handleAvatarButtons(true)}
                        >
                            <ArrowRight className={classes.arrow}/>
                        </IconButton>
                    </Grid>
                </Grid>
                
                <Typography variant="h5">
                    Pick an username
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
                    onKeyPress={(e) => e.key==='Enter' ? handleLogin() : null}
                >
                </TextField>
                
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
    );
}

// export default FormLogin