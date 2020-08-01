import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";

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
    button: {
      fontSize: "1.05rem",
      color: "#62B2C5",
      fontWeight: 500,
    },
    loginIcon: {
      width: "1.75rem",
      height: "1.75rem",
    },
  })
);

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          CBNR
        </Typography>
        <Button
          color="primary"
          startIcon={<AccountCircleIcon className={classes.loginIcon} />}
          className={classes.button}
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}
