import React, { FC } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { StateDefinition } from "../../store/reducer";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";
import User from "../../models/user";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexGrow: 1,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "#F9F9F9",
            color: "#5E5E5E",
            fontWeight: "bold",
        },
        title: {
            flexGrow: 1,
        },
        avatar: {
            marginRight: 8,
        },
    }),
);

interface TopAppBarProps {
    user: User | undefined;
}

const TopAppBar: FC<TopAppBarProps> = ({ user }) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    CBNR
                </Typography>
                {user && (
                    <>
                        <Avatar
                            alt="User avatar"
                            src={`/image/avatar/avatar_${user.avatarId}.jpg`}
                            className={classes.avatar}
                        />
                        <Typography>
                            {user.name}
                        </Typography>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

const mapStoreToProps = (state: StateDefinition) => ({
    user: state.currentUser,
});

export default connect(mapStoreToProps)(TopAppBar);