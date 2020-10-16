import React from "react";
import DateTime from "./DateTime.js";
import WeatherIcons from "./WeatherIcons.js";
import Conversion from "./Conversion.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="current-location">
              {props.data.city}
            </h1>
            <DateTime date={props.data.date} />
            <div>
              <WeatherIcons code={props.data.icon} />
              <Conversion fahrenheit={props.data.temperature} />
            </div>
          </Col>
          <Col md={3}>
            Feels like:
            <br />
            Daily high: {props.data.tempmax}°
            <br />
            Daily low: {props.data.tempmin}°
          </Col>
          <Col md={3}>
            Today: {props.data.description}
            <br />
            Humidity: {props.data.humidity}%
            <br />
            Wind speed: {props.data.wind} mph
          </Col>
        </Row>
      </Container>
    </div>
  );
}
