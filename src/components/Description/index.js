import React from "react";
import Title from "../Title/";
import Album from "../Album/";
import "./Description.css"

function Desc(props) {
  return (
    <div className="text">
      <Title title={props.title} />
      <Album artist={props.artist} album={props.album} />
    </div>
  );
}

export default Desc;
