import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  return (
    <>
      <Container className="pt-4 pb-4">
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1>Ranch Supply</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              accusamus incidunt perspiciatis itaque qui quod earum porro
              eveniet nemo impedit temporibus quas ut repellat eum, ipsa,
              veritatis minima quasi maiores?
            </p>
            {/* If user is logged in dont show login/register button otherwise show buttons  */}
            {false ? (
              ""
            ) : (
              <div>
                <Button variant="primary" className="me-2">
                  Login
                </Button>
                <Button variant="outline-primary" className="me-3">
                  Register
                </Button>
              </div>
            )}
          </Col>
          <Col xs={12} md={6}>
            <img
              src="src/assets/hero-image.png"
              style={{ width: "100%" }}
              fluid="true"
              className="d-inline-block align-top"
              alt="RanchSupply Logo"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeContent;
