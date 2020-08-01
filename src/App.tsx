import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./pages/global/TopAppBar";
import Map from "./pages/map/Map";
import Building from "./pages/building/Building";
import "./main.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
    },
    map: {
    },
    building: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    appBarSpacer: theme.mixins.toolbar,
  })
);

export default function App() {
  const [buildId, setBuildId] = React.useState<String | undefined>(undefined);
  const classes = useStyles();

  const onClick = (buildId) => {
    setBuildId(buildId);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
    </div>
  );
}
