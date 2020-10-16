import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherInfo({
      loaded: true,
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      image: response.data.weather[0].icon,
    });
  }

  function handleSearch() {
    const  apiKey = `43d48c14e180f75f558e0def6bf829b0`;
    const  units = `imperial`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.loaded) {
    return (
      <div className="Weather">
        <WeatherData data={weatherInfo} />

        <form className="Search" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter your city"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={getCity}
                />
              </div>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-light">
                Search
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-light"
                id="current-location"
              >
                <span role="img" aria-label="Location">
                  <i className="fas fa-map-marker-alt"></i>
                </span>{" "}
                Location
              </button>
            </div>
          </div>
        </form>
        <Forecast city={weatherInfo.cityName} />
      </div>
    );
  } else {
    handleSearch();
    return "Loading...";
  }
}