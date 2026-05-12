import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Particles from "react-tsparticles";
import { particlesCOnfig, particlesInit } from "./config/particlesConfig";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Container>
          <Home />
          <About />
          <Projects />
          <Contact />
        </Container>
        <footer>All copyright are preserved - Mohamed Alkfrawy</footer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesCOnfig}
        />
      </BrowserRouter>
    );
  }
}

export default App;
