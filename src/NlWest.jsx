import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function NlWest(props) {
  return (
    <a href="teamPage.html">
      <img
        type="image"
        href="teamPage.html"
        src={props.img}
        className="NlWest"
      />
    </a>
  );
}

export default NlWest;
