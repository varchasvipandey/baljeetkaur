import React from "react";

import "./button.css";

const Button = props => {
  return (
    <a href={props.location} className="btn button">
      {props.text}
    </a>
  );
};

export default Button;
