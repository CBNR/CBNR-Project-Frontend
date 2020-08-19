import React, { FC } from 'react';
import LoginForm from './pages/login/LoginForm'
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./pages/global/TopAppBar";
import Map from "./pages/map/Map";
import Building from "./pages/building/Building";
import "./main.css";
import User from './models/user';
import { StateDefinition } from './store/reducer';
import { connect } from 'react-redux';
import Room from './models/room';
import RoomListDTO from './models/DTO/roomListDTO';
import { CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "100vh",
            display: "flex",
        },
        map: {},
        building: {
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
        },
        appBarSpacer: theme.mixins.toolbar,
        loadingContainer: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            overflow: "auto",
        },
        loading: {
            alignSelf: "center",
        },
        loadingText: {
            alignSelf: "center",
            marginTop: theme.spacing(1),
        },
    }),
);

interface AppProps {
    currentUser: User | undefined;
    building: Room | undefined;
    roomList: RoomListDTO[];
}

const App: FC<AppProps> = ({ currentUser, building, roomList }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            {currentUser ? (
                <>
                    <AppBar />
                    {roomList.length
                    ?   (!building ? (
                                <div className={classes.map}>
                                    <div className={classes.appBarSpacer} />
                                    <Map />
                                </div>
                            ) : (
                                <div className={classes.building}>
                                    <div className={classes.appBarSpacer} />
                                    <Building building={building} />
                                </div>
                            )
                    ) : (
                            <div className={classes.loadingContainer}>
                                <CircularProgress className={classes.loading} />
                                <Typography className={classes.loadingText}>Fetching Chatrooms...</Typography>
                            </div>
                    )}
                </>
            ) : (
                <LoginForm />
            )}
        </div>
    );
}

const mapStoreToProps = (state: StateDefinition) => ({
    currentUser: state.currentUser,
    building: state.currentRoom,
    roomList: state.roomList,
});

export default connect(mapStoreToProps)(App);
