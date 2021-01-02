import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Man.css";
import ManMainBackground from "./man-background.mp4";

export default function Man() {
  return (
    <Container fluid>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "150%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={ManMainBackground} type="video/mp4" />
      </video>
      <Row>
        <Col className="man-main">
          <h1>Workout Summary</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }} className="man-sub">
          <p>
            No equipment or gym? No problem. Build muscle at home with this
            classic bodyweight training system. This is a flexible training
            system that focuses on the use of exercise complexes.
          </p>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className="man-workout" md={{ span: 4, offset: 3 }}>
            <p> Exercise</p>
          </Col>
          <Col className="man-workout" md={{ span: 2 }}>
            <p> Sets </p>
          </Col>
          <Col className="man-workout" md={{ span: 1 }}>
            <p> Reps</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-complex" md={{ span: 7, offset: 3 }}>
            <p>Complex 1</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Push Up</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Medium-Grip Pull Up</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Handstand or Jackknife Push Up</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Diamond Push Up</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Inverted Rack Curl Up</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-complex" md={{ span: 7, offset: 3 }}>
            <p>Complex 2</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Single-Leg Calf Raise</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Jump Squat</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Walking Lunge</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
        <Row>
          <Col className="man-workout-p" md={{ span: 4, offset: 3 }}>
            <p>Hanging Leg Raise</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 2 }}>
            <p>2-5</p>
          </Col>
          <Col className="man-workout-p" md={{ span: 1 }}>
            <p>10-20</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
