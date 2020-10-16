import React from "react";
import WeatherIcons from "./WeatherIcons";

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
    <div className="WeatherFororecast">
      {hours()}
      <WeatherIcons code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
