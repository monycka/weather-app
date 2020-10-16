import React, { useState } from "react";

import axios from "axios";
import "./Forecast.css";
import ForecastDisplay from "./ForecastDisplay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        <ForecastDisplay data={forecast.list[0]} />
        <ForecastDisplay data={forecast.list[1]} />
        <ForecastDisplay data={forecast.list[2]} />
        <ForecastDisplay data={forecast.list[3]} />
        <ForecastDisplay data={forecast.list[4]} />
        <ForecastDisplay data={forecast.list[5]} />
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