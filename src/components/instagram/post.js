import React from "react";
import { Col } from "reactstrap";
import InstagramEmbed from "react-instagram-embed";

const Post = props => {
  return (
    <Col lg="6" className="offset-lg-3 post">
      <InstagramEmbed
        align="center"
        url={props.link}
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        className="insta-post-canvas"
      />
    </Col>
  );
};

export default Post;
