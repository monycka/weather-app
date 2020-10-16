import React from "react";
import "./Weather.css";

export default function Middle() {
  let weatherData = {
    city: "San Francisco",
    country: "US",
    date: "Thursday, September 24",
    time: "15:57",
    temperature: "71",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    feels: "73",
    high: "77",
    low: "63",
    description: "Cloudy",
    humidity: "60",
    wind: "17"
  };
  return (
    <div className="Middle">
      <div className="container">
        <div className="middle">
          <div className="row row-no-gutters">
            <div className="col-md-6">
              <span className="left-side">
                <span className="location">
                  <span className="current-city"></span> {weatherData.city},{" "}
                  {weatherData.country} <span className="country"></span>
                </span>
                <br />
                <span className="dateTime">
                  <span className="current-date">{weatherData.date}</span>
                  <br />
                  <span>
                    Last updated:{" "}
                    <span className="current-time">{weatherData.time}</span>
                  </span>
                </span>
                <br />
                <span className="temperature" className="temperature">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="current-icon"
                  />{" "}
                  <span className="current-temperature">
                    {weatherData.temperature}
                  </span>
                  <span className="units">
                    <a href="/" className="active" className="fahrenheit-link">
                      °F
                    </a>
                    <span className="bar">|</span>
                    <a href="/" className="celsius-link">
                      °C
                    </a>
                  </span>
                </span>
              </span>
            </div>
            <div className="col-md-3">
              <div className="right-side">
                <span className="daily">
                  <div className="daily-temperatures">
                    <span>Feels like: </span>
                    <span className="feels-like">{weatherData.feels}</span>
                    <span>°F</span>
                    <br />
                    <br />
                    <span>Daily high: </span>
                    <span className="daily-high">{weatherData.high}</span>
                    <span>°F</span>
                    <br />
                    <br />
                    <span>Daily low: </span>
                    <span className="daily-low">{weatherData.low}</span>
                    <span>°F</span>
                    <br />
                    <br />
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="right-side">
                <span className="daily">
                  <div className="daily-conditions">
                    <span>Today: </span>
                    <span className="weather-description">
                      {weatherData.description}
                    </span>
                    <br />
                    <br />
                    <span>Humidity: </span>
                    <span className="humidity">{weatherData.humidity}</span>
                    <span>%</span>
                    <br />
                    <br />
                    <span>Wind speed: </span>
                    <span className="wind-speed">{weatherData.wind}</span>
                    <span>mph</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
