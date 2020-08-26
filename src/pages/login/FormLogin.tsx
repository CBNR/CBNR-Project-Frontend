import React, { FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'; 
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { ArrowLeft, ArrowRight } from '@material-ui/icons/';
import { useStyles } from './styles/login';
import { StateDefinition } from '../../store/reducer';
import { connect } from 'react-redux';

interface FormLoginProps {
    handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLogin: () => void;
    handleAvatarButtons: (next: boolean) => void;
    inProgressLogin: boolean;
    username: string;
    avatarId: number;
    loginAttempt: boolean;
}

const FormLogin: FC<FormLoginProps> = ({
    handleUsernameChange,
    handleLogin,
    handleAvatarButtons,
    inProgressLogin,
    username,
    avatarId,
    loginAttempt,
}) => {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                {loginAttempt && !inProgressLogin && (
                    <Typography color='error'>
                        Login failed
                    </Typography>
                )}
                <Grid container spacing={4} className={classes.wrapper}>    
                    <Grid item>
                        <IconButton 
                            aria-label="previous" 
                            className={classes.arrowButtons}
                            disableRipple={true}
                            onClick={() => handleAvatarButtons(false)}
                            disabled={inProgressLogin}
                        >
                            <ArrowLeft className={classes.arrow}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Avatar alt="Selected avatar" src={"/image/avatar/avatar_" + avatarId + ".jpg"} className={classes.avatar}></Avatar>
                    </Grid>
                    <Grid item>
                        <IconButton 
                            aria-label="next" 
                            className={classes.arrowButtons}
                            disableRipple={true}
                            onClick={() => handleAvatarButtons(true)}
                            disabled={inProgressLogin}
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
                    error={loginAttempt && !username}
                    helperText={(loginAttempt && !username) ? "Type in an username, you jaffy!" : ""}
                    onChange={handleUsernameChange}
                    disabled={inProgressLogin}
                    onKeyPress={(e) => e.key==='Enter' ? handleLogin() : null}
                >
                </TextField>
                
                <Button
                size="large"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
                disabled={inProgressLogin || (loginAttempt && !username)}
                >
                    Login
                </Button>
            </div>
        </Container>
    );
}

const mapStoreToProps = (state: StateDefinition) => ({
    inProgressLogin: state.inProgressLogin,
});

export default connect(mapStoreToProps)(FormLogin);
