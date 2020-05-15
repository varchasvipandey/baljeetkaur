import React from "react";
import { Col } from "reactstrap";

const Landscape = props => {
  return (
    <Col lg="6" className="landscape-image-container">
      <img src={props.source} alt="my pic" className="landscape-image"></img>
    </Col>
  );
};

export default Landscape;
