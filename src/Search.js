import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <Container className="search-bar">
        <Row>
          <Col md={6}>
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control searching"
              autoFocus="on"
              autoComplete="off"
            />
          </Col>
          <Col md={3}>
            <Button
              type="submit"
              className="form-control search"
              variant="light"
            >
              SEARCH
            </Button>
          </Col>
          <Col md={3}>
            <Button
              variant="light"
              type="submit"
              value="Current Location"
              className="form-control current-location"
            >
              Current Location
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
