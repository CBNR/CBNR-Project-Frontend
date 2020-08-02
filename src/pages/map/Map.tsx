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

interface MapProps {
  handleBuildingSelect: Function;
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

const Map: FC<MapProps> = ({ handleBuildingSelect }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const focus = useRef<SVGCircleElement>(null);
  const rightBar = useRef<HTMLDivElement>(null);

  //TODO: Fix map focus for sidebar offset
  useEffect(() => {
    console.log("hello there")
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
      <MapInteractionCSS minScale={1} maxScale={2} disableZoom={true}>
        <MapSVG handleBuildingSelect={handleBuildingSelect} focus={focus} show={checked}/>
      </MapInteractionCSS>
      <div className={classes.rightBar} ref={rightBar}>
        <Typography variant="h6" className={classes.title}>
          Buildings
        </Typography>
        <Divider />
        <List className={classes.list}>
          {[
            ["Campus Centre", "12"],
            ["Learning and Teaching Building", "9"],
            ["Menzies", "10"],
            ["Matheson Library", "0"],
            ["Hargrave-Andrew Library", "0"],
          ].map((building, index) => (
            <React.Fragment>
              <ListItem
                button
                key={building[0]}
                alignItems="center"
                className={classes.listItem}
                onClick={() => {
                  handleBuildingSelect(building[0]);
                }}
              >
                <ListItemText
                  primary={building[0]}
                  className={classes.listTitle}
                />
                <div className={classes.listRight}>
                  <ListItemText
                    primary={building[1]}
                    className={classes.listCount}
                  />
                  <PeopleAltIcon />
                </div>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};

export default Map;