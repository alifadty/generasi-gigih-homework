import React from "react";
import './stylesheet.css';

function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <div className="img">
            <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="thumbnail"/>
        </div>
        <div className="text">
            <p>{props.title}</p>
            {props.artist}, {props.album}
        </div>
        <button type="submit" className="btn">Select</button>
      </div>
    </div>
  );
}

export default Card;