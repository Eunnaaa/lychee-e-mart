import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5 bg-light content">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="text-dark">About Us</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={6}>
          <p className="lead">
            Welcome to Lychee Mart, your ultimate destination for discovering
            the perfect blend of quality, value, and style. We pride ourselves
            on being more than just a marketplace; we're a lifestyle hub
            dedicated to enhancing your shopping experience with a curated
            selection of fashion, gadgets, jewelry, and more.
          </p>
          <p className="text-muted">
            At Lychee Mart, we believe that shopping should be both enjoyable
            and fulfilling. Our mission is to provide you with access to
            high-quality products at competitive prices while delivering
            exceptional customer service. We aim to inspire confidence and
            creativity in every purchase, empowering you to express your unique
            style and personality.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/assets/abt.jpg"
            alt="About Lychee Mart"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
