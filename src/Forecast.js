import React, { useState } from "react";
import axios from "axios";
import ForecastDisplay from "./ForecastDisplay";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="forecast">
        <Row>
          <Col md={2}><ForecastDisplay data={forecast.list[0]} /></Col>
          <Col md={2}><ForecastDisplay data={forecast.list[1]} /></Col>
          <Col md={2}><ForecastDisplay data={forecast.list[2]} /></Col>
          <Col md={2}><ForecastDisplay data={forecast.list[3]} /></Col>
          <Col md={2}><ForecastDisplay data={forecast.list[4]} /></Col>
          <Col md={2}><ForecastDisplay data={forecast.list[5]} /></Col>
        </Row>
      </div>
    );
  } else {
    let apiKey = `43d48c14e180f75f558e0def6bf829b0`;
    let units = `imperial`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(forecastResponse);

    return null;
  }
}
