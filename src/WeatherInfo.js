import React from "react";
import DateTime from "./DateTime.js";
import WeatherIcons from "./WeatherIcons.js";
import Conversion from "./Conversion.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <DateTime date={props.data.date} />
        </div>
        <div className="col">
          <Conversion fahrenheit={props.data.temperature} />
        </div>
        <div className="col-3">
          <WeatherIcons code={props.data.icon} />
          <p className="text-capitalize">{props.data.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="wind">
            Wind ={" "}
            {props.data.wind}
            km/h
          </p>
        </div>
        <div className="col-4">
          <p className="humidity">
            {props.data.humidity}%
          </p>
        </div>
        <div className="col-4">
          <p className="highlow">
            H: {props.data.tempmax}° |{" "}
            L: {props.data.tempmin}°
          </p>
        </div>
      </div>
    </div>
  );
}