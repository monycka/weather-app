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
      <Container className="current-info">
        <Row>
          <Col md={6}>
            <h1 className="current-city">
              {props.data.city}, {props.data.country}
            </h1>
            <div className="date-time">
              <DateTime date={props.data.date} />
            </div>
            <div className="icons">
              <WeatherIcons code={props.data.icon} />
            </div>
            <div className="current-temperature">
              <Conversion fahrenheit={props.data.temperature} />
            </div>
          </Col>
          <Col md={3}>
            Feels like: {props.data.feels}°F
            <br />
            Daily high: {props.data.tempmax}°F
            <br />
            Daily low: {props.data.tempmin}°F
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
