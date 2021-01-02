import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "../Navbar/Header.css";
import { FcCalendar } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FcStatistics } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { GiDoorHandle } from "react-icons/gi";

export const Header = () => {
  return (
    <Navbar>
      <Nav className="mr-auto">
        <div class="menu-container">
          <input type="checkbox" id="openmenu" class="hamburger-checkbox" />

          <div class="hamburger-icon">
            <label for="openmenu" id="hamburger-label">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="menu-pane">
            <Row className="menu-pane-sub">
              <Col>
                <a href="/calendar">
                  <FcCalendar
                    className="menu-pane-icons"
                    style={{ fontSize: 150 }}
                  />
                  <p className="p-icons">Calendar</p>
                </a>
              </Col>

              <Col>
                <a href="/program">
                  <FcSportsMode
                    className="menu-pane-icons"
                    style={{ fontSize: 150 }}
                  />
                  <p className="p-icons">Program</p>
                </a>
              </Col>

              <Col>
                <a href="/home">
                  <FcStatistics
                    className="menu-pane-icons"
                    style={{ fontSize: 150 }}
                  />
                  <p className="p-icons">Progress</p>
                </a>
              </Col>
              <Col>
                <a href="/bmi">
                  <FcProcess
                    className="menu-pane-icons"
                    style={{ fontSize: 150 }}
                  />
                  <p className="p-icons">BMI</p>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </Nav>
      <Nav>
        <a href="/home">
          <GiDoorHandle className="door-icon" style={{ fontSize: 40 }} />
        </a>
      </Nav>
    </Navbar>
  );
};
