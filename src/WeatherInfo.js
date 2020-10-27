import React from "react";
import DateTime from "./DateTime.js";
import WeatherIcons from "./WeatherIcons.js";
import Conversion from "./Conversion.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="current-info">
      <Row>
        <Col md={6}>
          <h1 className="current-city">
            {props.data.city}, {props.data.country}
          </h1>
          <div className="date-time">
            <DateTime date={props.data.date} />
          </div>
          <div className="clearfix">
            <div className="current-icon">
              <WeatherIcons code={props.data.icon} alt={props.data.description}/>
            </div>
            <div className="current-temperature">
              <Conversion fahrenheit={props.data.temperature} />
            </div>
          </div>
        </Col>
        <Col md={3} className="weather-info">
          Feels like: {props.data.feels}°F
          <br />
          <br />
          Daily high: {props.data.tempmax}°F
          <br />
          <br />
          Daily low: {props.data.tempmin}°F
          <br />
          <br />
        </Col>
        <Col md={3} className="weather-info">
          Today: {props.data.description}
          <br />
          <br />
          Humidity: {props.data.humidity}%
          <br />
          <br />
          Wind speed: {props.data.wind} mph
          <br />
          <br />
        </Col>
      </Row>
    </div>
  );
}
