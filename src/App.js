import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import Container from "react-bootstrap/Container";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container className="Weather">
        <Container className="Search">
          <Search />
        </Container>
        <Container className="Middle">
          <Weather />
        </Container>
        <Container className="Forecast">
          <Forecast />
        </Container>
        <Footer />
      </Container>
    </div>
  );
}
