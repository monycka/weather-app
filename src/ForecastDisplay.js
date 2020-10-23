import React from "react";
import WeatherIcons from "./WeatherIcons";

import "./Forecast.css";

export default function ForecastDisplay(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp_max);
    return `${temperature}°F`;
  }

  return (
    <div className="weatherForecast">
      <span className="forecast-hours">{hours()}</span>
      <br />
      <WeatherIcons code={props.data.weather[0].icon} />
      <br />
      {temperature()}
    </div>
  );
}
