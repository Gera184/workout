import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import Clock from "../assets/clock.mp4";
import "./Calendar.css";

export const CalendarCom = () => {
  
  const [calDate, setCalDate] = useState(new Date());

  function onChange(calDate) {
    setCalDate(calDate);
  }

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
        <source src={Clock} type="video/mp4" />
      </video>

      <Row>
        <Col >
          <Calendar onChange={onChange} value={calDate} />
        </Col>
      </Row>
    </Container>
  );
};
