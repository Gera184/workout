import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useFormInput from "./useFormInput.js";
import useBmiCalculator from "./useBmiCalculator";
import Weight from "../assets/weight.mp4";
import "./Bmi.css";

export default function BmiForm(props) {
  const weight = useFormInput();

  const height = useFormInput();

  const { bmiValue, bmiResult } = useBmiCalculator(weight, height);

  return (
    <div>
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
        <source src={Weight} type="video/mp4" />
      </video>
      <Form>
        <Container className="bmi-main">
          <Form.Group controlId="height">
            <Form.Label>Your height</Form.Label>

            <Form.Control
              name="height"
              type="text"
              pattern="[0-9]*"
              placeholder="height in centimeters"
              {...height}
            />
          </Form.Group>

          <Form.Group controlId="weight">
            <Form.Label>Your weight</Form.Label>

            <Form.Control
              name="weight"
              type="text"
              pattern="[0-9]*"
              placeholder="weight in kilos"
              {...weight}
            />
          </Form.Group>
        </Container>
        <Container className="bmi-sub">
          <div className="bmi-value">Your BMI: {bmiValue}</div>

          <div className="bmi-conclusion">You are: {bmiResult}</div>
        </Container>
      </Form>
    </div>
  );
}
