import React from "react";
import { Container, Row, Col } from "reactstrap";

import Gallery from "../gallery/gallery";

import "./main.css";

const Main = () => {
  return (
    <main>
      <Container fluid>
        {/* INTRODUCTIOn */}
        <section className="section section-introduction">
          <Row id="section-introduction">
            <Col lg="8" className="offset-lg-2 center">
              <h2 className="section-heading">Quick introduction</h2>
            </Col>
            <Col lg="8" className="offset-lg-2 justify">
              <p className="section-text">
                Hi, my name is Baljeet Kaur and I'm a 22-year-old modeling and
                fitness enthusiast. I've been doing yoga for the last two years.
                I started my journey of becoming a successful model and
                Influencer in July 2018. Since then I've been part of several
                professional photo shoots. I also upload a lot about yoga, its
                benefits and how to perform it. Thank you so much for visiting
                here. Please continue scrolling.
              </p>
            </Col>
            <Col lg="8" className="offset-lg-2 mt-4">
              <hr />
            </Col>
          </Row>
        </section>
        {/* SOCIAL */}
        <section className="section section-social" id="social">
          <Row id="section-social">
            <Col lg="8" className="offset-lg-2 center">
              <h2 className="section-heading">Social</h2>
            </Col>
            <Col lg="8" className="offset-lg-2 justify">
              <p className="section-text">
                Social media is where you can find me. Find all my latest posts
                and blogs on my social media handles. Get in touch for info and
                collaborations.
              </p>
            </Col>
            <Col lg="6" className="offset-lg-3 center">
              <a
                href="https://instagram.com/iambaljeetk"
                target="_blank"
                rel="noopener noreferrer"
                className="section-icon"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://vm.tiktok.com/Td8UvV"
                target="_blank"
                rel="noopener noreferrer"
                className="section-icon"
              >
                <i class="fab fa-itunes-note"></i>
              </a>
              <a
                href="https://gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="section-icon"
              >
                <i class="fab fa-blogger-b"></i>
              </a>
            </Col>
            <Col lg="8" className="offset-lg-2">
              {/* {window.screen.width > 900 ? <Instagram /> : null} */}
            </Col>
            <Col lg="8" className="offset-lg-2 mt-4">
              <hr />
            </Col>
          </Row>
        </section>
        {/* GALLERY */}
        <section className="section section-gallery" id="gallery">
          <Row id="section-gallery">
            <Col lg="8" className="offset-lg-2 center">
              <h2 className="section-heading">Gallery</h2>
            </Col>
            <Col lg="8" className="offset-lg-2 justify">
              <p className="section-text">
                Find some of my exclusive pictures here. I upload most of my
                content on Instagram, don't forget to dive deeper into my social
                media accounts.
              </p>
            </Col>
            <Col lg="8" className="offset-lg-2 justify" id="gallery">
              <Gallery />
            </Col>
            <Col lg="8" className="offset-lg-2 mt-4">
              <hr />
            </Col>
          </Row>
        </section>
        {/* BLOG */}
        <section className="section section-blog" id="blogs">
          <Row id="section-blogs">
            <Col lg="8" className="offset-lg-2 center">
              <h2 className="section-heading">Blogs</h2>
            </Col>
            <Col lg="8" className="offset-lg-2 justify">
              <p className="section-text">
                This is going to be one of the best places to learn about yoga
                and to master the skills. Blogs will be uploaded soon, stay
                tuned. You can add this page to your homescreen to get a small
                yet powerful application.
              </p>
            </Col>
            <Col lg="8" className="offset-lg-2 justify">
              {/*  BLOG*/}
            </Col>
            <Col lg="8" className="offset-lg-2 mt-4">
              <hr />
            </Col>
          </Row>
        </section>
        {/* FOOTER */}
        <section className="section section-blog" id="footer">
          <Row id="section-footer">
            <Col lg="8" className="offset-lg-2 center">
              <p className="section-text">&copy; Baljeet Kaur 2020</p>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Main;
