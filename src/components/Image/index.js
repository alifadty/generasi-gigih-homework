import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div className="img">
      <img src={props.src} alt="thumbnail" />
    </div>
  );
}

export default Image;
