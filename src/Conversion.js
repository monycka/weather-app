import React, { useState } from "react";
import "./Weather.css";

export default function Conversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          <a href="/">°F</a> <span className="bar">|</span>{" "}
          <a href="/" onClick={displayCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>{" "}
          <span className="bar">|</span> <a href="/">°C</a>
        </span>
      </div>
    );
  }
}
