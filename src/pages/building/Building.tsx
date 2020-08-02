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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chatroom from '../chatroom/components/Chatroom';
import { Box } from '@material-ui/core';
import LTB from "./ltb.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "calc(100vh - 56px)", 
      [theme.breakpoints.up('xs')]: { 
        height: "calc(100vh - 48px)", 
      }, 
      [theme.breakpoints.up('sm')]: { 
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
    },
    chat: {
      height: "100%",
      boxShadow: "-4px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    chatBox: {
      height: "100%",
    },
    rightBar: {
      height: "100%",
      padding: "1rem",
      backgroundColor: "#F9FCFF",
      boxShadow: "-4px 4px 8px rgba(0, 0, 0, 0.1)",
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
  })
);

interface BuildingProps {
  buildId: String | undefined;
  handleBack: Function;
}

const Building: FC<BuildingProps> = ({ buildId, handleBack }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} md={2} className={classes.backBar}>
        <Fab
          aria-label="add"
          onClick={() => {
            handleBack(undefined);
          }}
        >
          <ArrowBackIcon />
        </Fab>
      </Grid>
      <Grid item xs={7} md={8} className={classes.chat}>
        <Box className={classes.chatBox}>
          <Chatroom />
        </Box>
      </Grid>
      <Grid item xs={3} md={2} className={classes.rightBar}>
        <Typography variant="h6" className={classes.title}>
          {buildId !== undefined ? buildId : "Rotunda"}
        </Typography>
        <Divider />
        <List className={classes.list}>
          {[
            "Charlie Smith",
            "Ben Brown",
            "Nathen Martinez",
            "Rachel Miller",
          ].map((name, index) => (
            <React.Fragment>
              <ListItem
                button
                key={name}
                alignItems="center"
                className={classes.listItem}
              >
                <Avatar className={classes.listAvatar}>{name[0]}</Avatar>
                <ListItemText primary={name} />
                <MoreVertIcon />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Building;
