import React, { FC, useEffect, useRef } from "react";
import MapSVG from "./MapSVG";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { MapInteractionCSS } from "react-map-interaction";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Grid from '@material-ui/core/Grid';
import "./main.css";
import { StateDefinition } from "../../store/reducer";
import RoomListDTO from "../../models/DTO/roomListDTO";
import { RoomType } from "../../models/room";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { EMIT_JOIN_ROOM_ACTION_CREATOR } from "../../store/actions";
import { CircularProgress } from "@material-ui/core";

interface MapProps {
  handleBuildingSelect: (buildingId: string) => void;
  roomList: RoomListDTO[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "calc(100vh - " + theme.mixins.toolbar.minHeight + "px)",
      padding: "0px",
    },
    title: {
      color: "#8B8B8B",
      margin: "20px 10px 20px 10px",
      lineHeight: "1.2",
    },
    map: {
      overflow: "hidden",
      position: "relative",
    },
    rightBar: {
      position: "fixed",
      top: theme.mixins.toolbar.minHeight,
      right: 0,
      height: "100vh",
      width: "25%",
      padding: "0.75rem",
      backgroundColor: "#F9FCFF",
      boxShadow: "-4px 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "scroll",
    },
    list: {
      paddingTop: "0px",
    },
    listItem: {
      paddingLeft: "10px",
      borderBottom: "1px solid #DEE0E2",
      color: "#9C9C9C",
    },
    listTitle: {
      overflow: "ellipsis",
    },
    listRight: {
      display: "contents",
      overflow: "hidden",
    },
    listCount: {
      textAlign: "left",
      flex: "none",
      [theme.breakpoints.up('sm')]: {
        textAlign: "right",
        flex: "1 1 auto",
      },
      marginRight: "5px",
      marginTop: "auto",
      marginBottom: "auto",
    },
    listCountIcon: {
      marginTop: "auto",
      marginBottom: "auto",
    }
  })
);

const Map: FC<MapProps> = ({ handleBuildingSelect, roomList }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const focus = useRef<SVGPathElement>(null);
  const rightBar = useRef<HTMLDivElement>(null);

  //TODO: Fix map focus for sidebar offset
  useEffect(() => {
    focus!.current!.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });

    window.scrollBy(rightBar!.current!.getBoundingClientRect().width / 2, 0);

    if (!checked) {
      setChecked(true);
    }
  }, [checked]);

  return (
    <React.Fragment>
      <MapInteractionCSS
        defaultValue={{
          scale: 1.25,
          translation: { x: 0, y: 0 },
        }}
      >
        <MapSVG
          handleBuildingSelect={handleBuildingSelect}
          focus={focus}
          show={checked}
        />
      </MapInteractionCSS>
      <div className={classes.rightBar} ref={rightBar}>
        <Typography variant="h6" className={classes.title}>
          Buildings
        </Typography>
        <Divider />
        <List className={classes.list}>
          {roomList.length ? (
            roomList.map((building) => (
              <React.Fragment key={building.id}>
                <ListItem
                  button
                  alignItems="center"
                  className={classes.listItem}
                  onClick={() => {
                    handleBuildingSelect(building.id);
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={7} md={9} className={classes.listTitle}>
                      <ListItemText
                        primary={building.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} className={classes.listRight}>
                      <ListItemText
                        primary={building.userCount}
                        className={classes.listCount}
                      />
                      <PeopleAltIcon className={classes.listCountIcon}/>
                    </Grid>
                  </Grid>
                </ListItem>
              </React.Fragment>
            ))
          ) : (
            <CircularProgress />
          )}
        </List>
      </div>
    </React.Fragment>
  );
};

const mapStoreToProps = (state: StateDefinition) => ({
  roomList: state.roomList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleBuildingSelect: (buildingId: string) =>
    dispatch(EMIT_JOIN_ROOM_ACTION_CREATOR(buildingId)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Map);
