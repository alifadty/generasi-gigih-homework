import React from "react";

function Album(props) {
  return (
    <div>
      {props.artist},
      {props.album}
    </div>
  );
}

export default Album;
