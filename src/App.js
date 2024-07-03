import { Component } from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home'
import Particles from 'react-tsparticles';
import {particlesCOnfig , particlesInit} from './config/particlesConfig';
import Nav from './components/Nav';
import Container from './components/Container';
import Contact from './components/Contact'

class App extends Component{

  render(){
    return (
      <BrowserRouter>
      <Nav />
        <Container>
        <Routes>
          <Route path='portfolio/' exact Component={Home} />
          <Route path='portfolio/about' Component={About} />
          <Route path='portfolio/contact' Component={Contact} />
        </Routes>
        </Container>
        <Particles 
        id="tsparticles"
        init={particlesInit}
        options={particlesCOnfig}
        />
        </BrowserRouter>
    )
  }
}

export default App;
