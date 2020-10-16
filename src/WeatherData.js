import React from "react";

import DateTime from "./DateTime.js";
import WeatherIcons from "./WeatherIcons.js";
import Conversion from "./Conversion.js";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-5">
          <Conversion fahrenheitTemp={props.data.temperature} />
          <DateTime dayTime={props.data.date} />
        </div>

        <div className="col-6">
          <h2>
            <span>{props.data.cityName.toUpperCase()}</span>
          </h2>
          <center>
            <WeatherIcons iconCode={props.data.image} />
          </center>
          <h3>
            <span>{props.data.description}</span>
            <br />
            Wind: <span>{Math.round(props.data.wind)}</span>mph <br />
            Humidity: <span>{props.data.humidity}</span>%
          </h3>
        </div>
      </div>
    </div>
  );
}