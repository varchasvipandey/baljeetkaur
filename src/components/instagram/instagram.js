import React from "react";
import { Row } from "reactstrap";
import Post from "./post";

import "./instagram.css";

const Instagram = () => {
  return (
    <Row className="posts">
      <Post link="https://www.instagram.com/p/B_ctqe5pbzC/?utm_source=ig_web_copy_link"></Post>
      <Post link="https://www.instagram.com/p/B-4l_gQp5pi/?utm_source=ig_web_copy_link"></Post>
      <Post link="https://www.instagram.com/p/B-cpQfQpFku/?utm_source=ig_web_copy_link"></Post>
      <Post link="https://www.instagram.com/p/B-UoYIdJX-2/?utm_source=ig_web_copy_link"></Post>
    </Row>
  );
};

export default Instagram;
