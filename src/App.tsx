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
    }),
);

interface AppProps {
    currentUser: User | undefined;
    clearMessages: () => void;
    buildingId: string | undefined;
}

const App: FC<AppProps> = ({ currentUser, clearMessages, buildingId }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            {currentUser ? (
                <>
                    <AppBar />
                    {buildingId === undefined ? (
                        <div className={classes.map}>
                            <div className={classes.appBarSpacer} />
                            <Map />
                        </div>
                    ) : (
                        <div className={classes.building}>
                            <div className={classes.appBarSpacer} />
                            <Building buildId={buildingId} />
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
    buildingId: state.currentRoom ? state.currentRoom.id : undefined,
});

export default connect(mapStoreToProps)(App);
