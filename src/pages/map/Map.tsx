import React from "react";
import MapSVG from "./MapSVG";
import { MapInteractionCSS } from "react-map-interaction";
import "./main.css";

export default class Map extends React.Component<{}, {}> {
  componentDidMount() {
    document.getElementById("focus")!.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  }

  render() {
    return (
      <div className="map-wrapper">
        <MapInteractionCSS>
          <MapSVG onClick={() => {}} />
        </MapInteractionCSS>
      </div>
    );
  }
}
