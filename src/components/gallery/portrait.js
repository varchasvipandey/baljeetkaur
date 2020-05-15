import React from "react";
import { Col } from "reactstrap";

const Portrait = props => {
  return (
    <Col lg="4" sm="12" className="portrait-image-container">
      <img
        src={props.source}
        alt="my pic"
        className="mx-auto d-block portrait-image"
      ></img>
    </Col>
  );
};

export default Portrait;
