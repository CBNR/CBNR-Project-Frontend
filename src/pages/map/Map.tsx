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
import "./main.css";
import { StateDefinition } from "../../store/reducer";
import RoomListDTO from "../../models/DTO/roomListDTO";
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
    listTitle: {
      maxWidth: "70%",
    },
    listRight: {
      float: "right",
      display: "contents",
    },
    listCount: {
      textAlign: "right",
      marginRight: "5px",
    },
  })
);

const Map: FC<MapProps> = ({ handleBuildingSelect, roomList }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const focus = useRef<SVGCircleElement>(null);
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
      <MapInteractionCSS minScale={2} maxScale={3} disableZoom={true}>
        <MapSVG handleBuildingSelect={handleBuildingSelect} focus={focus} show={checked}/>
      </MapInteractionCSS>
      <div className={classes.rightBar} ref={rightBar}>
        <Typography variant="h6" className={classes.title}>
          Buildings
        </Typography>
        <Divider />
        <List className={classes.list}>
          {roomList.length
            ? roomList.map((building) => (
                <React.Fragment key={building.id}>
                  <ListItem
                    button
                    alignItems="center"
                    className={classes.listItem}
                    onClick={() => {
                      handleBuildingSelect(building.id);
                    }}
                  >
                    <ListItemText
                      primary={building.name}
                      className={classes.listTitle}
                    />
                    <div className={classes.listRight}>
                      <ListItemText
                        primary={building.userCount}
                        className={classes.listCount}
                      />
                      <PeopleAltIcon />
                    </div>
                  </ListItem>
                </React.Fragment>
              ))
            : <CircularProgress />
          }
        </List>
      </div>
    </React.Fragment>
  );
};

const mapStoreToProps = (state: StateDefinition) => ({
  roomList: state.roomList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleBuildingSelect: (buildingId: string) => dispatch(EMIT_JOIN_ROOM_ACTION_CREATOR(buildingId)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Map);
