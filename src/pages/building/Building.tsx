import React, { FC } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chatroom from "../chatroom/Chatroom";
import { Box } from "@material-ui/core";
import LTB from "./ltb.jpg";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { EMIT_LEAVE_ROOM_ACTION_CREATOR } from "../../store/actions";
import Room from "../../models/room";
import { StateDefinition } from "../../store/reducer";
import User from "../../models/user";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "calc(100vh - 56px)",
      [theme.breakpoints.up("xs")]: {
        height: "calc(100vh - 48px)",
      },
      [theme.breakpoints.up("sm")]: {
        height: "calc(100vh - 64px)",
      },
    },
    title: {
      color: "#8B8B8B",
      margin: "20px 10px 20px 10px",
      lineHeight: "1.2",
    },
    backBar: {
      height: "100%",
      overflowY: "hidden",
      padding: "1rem",
      backgroundImage: `url(${LTB})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "left bottom",

      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    chat: {
      height: "100%",
      boxShadow: "-4px 4px 8px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    chatBox: {
      height: "100%",
    },
    rightBar: {
      height: "100%",
      padding: "1rem",
      backgroundColor: "#F9FCFF",
      boxShadow: "-4px 4px 8px rgba(0, 0, 0, 0.1)",
      zIndex: 999,
    },
    list: {
      paddingTop: "0px",
    },
    listItem: {
      paddingLeft: "0px",
      borderBottom: "1px solid #DEE0E2",
      color: "#9C9C9C",
    },
    listAvatar: {
      marginRight: "10px",
    },
    back: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
      position: "absolute",
      top: "1rem",
      left: "1rem",
      backgroundColor: "#7986CB"
    },
    backIcon: {
      color: "#F9F9FB",
      verticalAlign: "middle",
    }
  })
);

interface BuildingProps {
  currentUser: User | undefined;
  building: Room;
  handleBack: () => void;
}

const Building: FC<BuildingProps> = ({ currentUser, building, handleBack }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={2} className={classes.backBar + ` ${building.id}`}>
        <Fab
          aria-label="add"
          onClick={() => {
            handleBack();
          }}
        >
          <ArrowBackIcon />
        </Fab>
      </Grid>
      <Grid item xs={9} md={8} className={classes.chat}>
        <Fab className={classes.back} aria-label="add"onClick={() => {
            handleBack();
          }}>
          <ArrowBackIcon className={classes.backIcon}/>
        </Fab>
        <Box className={classes.chatBox}>
          <Chatroom />
        </Box>
      </Grid>
      <Grid item xs={3} md={2} className={classes.rightBar}>
        <Typography variant="h6" className={classes.title}>
          {building.name}
        </Typography>
        <Divider />
        <List className={classes.list}>
          {currentUser &&
            [currentUser, ...building.connectedUsers].map((user) => (
              <React.Fragment>
                <ListItem
                  button
                  key={user.id}
                  alignItems="center"
                  className={classes.listItem}
                >
                  <Avatar
                    className={classes.listAvatar}
                    alt="User avatar"
                    src={`/image/avatar/avatar_${user.avatarId}.jpg`}
                  >
                    {user.name}
                  </Avatar>
                  <ListItemText primary={user.name} />
                </ListItem>
              </React.Fragment>
            ))}
        </List>
      </Grid>
    </Grid>
  );
};

const mapStoreToProps = (state: StateDefinition) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleBack: () => dispatch(EMIT_LEAVE_ROOM_ACTION_CREATOR()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Building);
