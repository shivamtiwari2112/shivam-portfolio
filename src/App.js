import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Navigation from './components/Navigation/Navigation';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}


export default App;
