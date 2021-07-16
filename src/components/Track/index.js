import React from "react";
import Data from "../../constants/TrackData";
import Track from "./Track";
import "./Track.css";

function TrackList() {
    return (
    <div className="track-item">
      <Track title={Data.name} artist={Data.artists[0].name} album={Data.album.name}/>
    </div>
  );
}

export default TrackList;