import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Me from "./Components/Me.jsx";
import Hobbies from "./Components/Hobbies.jsx";
import Contact from "./Components/Contact.jsx";
// import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Logo from "./AlcioneLogo.png";

import "./App.css";

function App() {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/me");
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={Logo}></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link className="nav-item-style" to="/home">Home</Link> */}
              <Link className="nav-item-style" to="/me">
                About Me
              </Link>
              <Link className="nav-item-style" to="/hobbies">
                Hobbies
              </Link>
              <Link className="nav-item-style" to="/contact">
                Let's Talk
              </Link>

              <Button variant="outline-danger" onClick={clickHandler}>
                Go to About Me
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/about" component={AboutMe} exact />

        <Route path="/me" component={Me} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/home" component={Home} /> */}
        <Route path="*" component={Notfound} />
      </Switch>
    </>
  );
}

export function Notfound() {
  return (
    <div className="container border p-3 rounded">
      <h3 className="text-danger">The Url Not defined for this application.</h3>
    </div>
  );
}

export default App;
