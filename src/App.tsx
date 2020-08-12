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
import { Dispatch } from 'redux';
import { CLEAR_MESSAGES_ACTION_CREATOR } from './store/actions';

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
}

const App: FC<AppProps> = ({ currentUser, clearMessages }) => {
    const [buildId, setBuildId] = React.useState<String | undefined>(undefined);
    const classes = useStyles();
    const onClick = (buildId) => {
        clearMessages();
        setBuildId(buildId);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            {currentUser ? (
                <>
                    <AppBar />
                    {buildId === undefined ? (
                        <div className={classes.map}>
                            <div className={classes.appBarSpacer} />
                            <Map handleBuildingSelect={onClick} />
                        </div>
                    ) : (
                        <div className={classes.building}>
                            <div className={classes.appBarSpacer} />
                            <Building buildId={buildId} handleBack={onClick} />
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
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearMessages: () => dispatch(CLEAR_MESSAGES_ACTION_CREATOR()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(App);
