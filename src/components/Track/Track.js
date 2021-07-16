import React from "react";


function Track(props) {
  return (
    <div className="track-list">
      <div className="container">
        <div className="text">
            <p>{props.title}</p>
            {props.artist}, {props.album}
        </div>
      </div>
    </div>
  );
}

export default Track;