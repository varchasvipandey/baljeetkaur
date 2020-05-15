import React from "react";
import { Row, Col } from "reactstrap";

// PORTRAIT
import image1 from "../../img/portrait/baljeet-kaur-portrait-1.jpg";
import image2 from "../../img/portrait/baljeet-kaur-portrait-2.jpg";
import image3 from "../../img/portrait/baljeet-kaur-portrait-3.jpg";
import image4 from "../../img/portrait/baljeet-kaur-portrait-4.jpg";
import image5 from "../../img/portrait/baljeet-kaur-portrait-5.jpg";
import image6 from "../../img/portrait/baljeet-kaur-portrait-6.jpg";
// LANDSCAPE
// import landscape from "../../img/landscape-sample-1.jpg";

import Portrait from "./portrait";
// import Landscape from "./landscape";

import "./gallery.css";

const Gallery = () => {
  return (
    <Row className="gallery-container">
      <Col lg="12" className="images portrait-images">
        <Row>
          <Portrait source={image1} />
          <Portrait source={image2} />
          <Portrait source={image3} />
          <Portrait source={image4} />
          <Portrait source={image5} />
          <Portrait source={image6} />
        </Row>
      </Col>
      {/* <Col lg="12" className="images landscape-images">
        <Row>
          <Landscape source={landscape} />
          <Landscape source={landscape} />
          <Landscape source={landscape} />
          <Landscape source={landscape} />
          <Landscape source={landscape} />
          <Landscape source={landscape} />
        </Row>
      </Col> */}
    </Row>
  );
};

export default Gallery;
