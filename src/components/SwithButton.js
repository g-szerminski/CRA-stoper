import React from "react";

const SwithButton = props => (
  <button onClick={props.click}>{props.active ? "Stop" : "Start"}</button>
);

export default SwithButton;
