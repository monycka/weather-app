import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Container />
        <h1 className="Header"> Weather App</h1>
        <Weather defaultCity="San Francisco" />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
