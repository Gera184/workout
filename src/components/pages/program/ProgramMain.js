import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Man from "../assets/images/men.JPEG";
import Women from "../assets/images/women.JPEG";
import "./ProgramMain.css";

export default function ProgramMain() {
  return (
    <Container fluid>
      <Row className="program-sub">
        <Col>
          <span>CHOOSE GENDER</span>
        </Col>
      </Row>
      <Container className="program-main">
        <Row>
          <Col>
            <a href="/man-program">
              <img src={Man} alt="" />
            </a>
            <span>WORKOUT FOR MAN</span>
          </Col>
          <Col>
            <a href="/women-program">
              <img src={Women} alt="" />
            </a>
            <span>WORKOUT FOR WOMEN</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
