import React from "react";
import { Main } from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Navbar/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CalendarCom } from "./components/pages/calendar/CalendarCom";
import BmiForm from "./components/pages/bmi/BmiForm";
import ProgramMain from "./components/pages/program/ProgramMain";
import Man from "./components/pages/program/man/Man";
import Women from "./components/pages/program/women/Women";

export default () => {
  return (
    <div>
      <Header />

      <Router>
        <Switch>
          <Route path="/home" component={Main} />
          <Route exact path="/" component={Main} />
          <Route exact path="/calendar" component={CalendarCom} />
          <Route exact path="/bmi" component={BmiForm} />
          <Route exact path="/program" component={ProgramMain} />
          <Route exact path="/man-program" component={Man} />
          <Route exact path="/women-program" component={Women} />
        </Switch>
      </Router>
    </div>
  );
};
