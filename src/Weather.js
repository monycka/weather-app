import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      feels: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      tempmax: Math.round(response.data.main.temp_max),
      tempmin: Math.round(response.data.main.temp_min),
    });
  }

  function search() {
    const apiKey = `43d48c14e180f75f558e0def6bf829b0`;
    const units = `imperial`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updatePosition(position) {
    let apiKey = `43d48c14e180f75f558e0def6bf829b0`;
    let units = `imperial`;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(updatePosition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form className="search-bar" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </Col>
          <Col md={3}>
            <Button
              type="submit"
              value="Search"
              className="form-control"
              id="searching"
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
              className="form-control"
              id="submit"
              onClick={getLocation}
            >
              Current Location
            </Button>
          </Col>
          </Row>
          
        </form>
          <WeatherInfo data={weatherData} />
          <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
