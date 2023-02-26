import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import logo from "../img/Spotify_Logo.png";
import Nav from "react-bootstrap/Nav";
function SlideBar() {
  return (
    <div>
      <div className="row">
        <div className="col-auto min-vh-100 bg-dark">
          <img src={logo} alt="" />{" "}
          <Nav>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Your Library</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">GO</Button>
          </Form>{" "}
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg">
              Sign Up
            </Button>
            <Button variant="secondary" size="lg">
              Login
            </Button>
            <a href="#action1">Cookie Policy|Privacy</a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
export default SlideBar;
