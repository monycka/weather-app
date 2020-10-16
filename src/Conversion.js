import React, { useState } from "react";

export default function TempConversion(props) {
  const [scale, setScale] = useState("fahrenheit");

  function displayFahrenheit(event) {
    event.preventDefault();
    setScale("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setScale("celsius");
  }

  if (scale === "fahrenheit") {
    return (
      <h1>
        <span className="temperature">{Math.round(props.fahrenheitTemp)}</span>
        <span className="scales">
          <a href="/" className="temp-scale">
            °F
          </a>{" "}
          |{" "}
          <a href="/" className="temp-scale" onClick={displayCelsius}>
            °C
          </a>
        </span>
      </h1>
    );
  } else {
    let celsius = (props.fahrenheitTemp - 32) * 5/9;
    return (
      <h1>
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="scales">
          <a href="/" className="temp-scale" onClick={displayFahrenheit}>
            °F
          </a>{" "}
          |{" "}
          <a href="/" className="temp-scale">
            °C
          </a>
        </span>
      </h1>
    );
  }
}