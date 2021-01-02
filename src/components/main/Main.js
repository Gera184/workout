import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SmokeMain from "../assets/SmokeMain.mp4";
import "./Main.css";

export const Main = () => {
  return (
    <Container>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={SmokeMain} type="video/mp4" />
      </video>

      <Row>
        <Col>
          <h1 className="dare-to-dream">Dare to dream</h1>
        </Col>
      </Row>
    </Container>
  );
};
