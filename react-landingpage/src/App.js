import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/aboutme" exact component={AboutMe}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      <Footer>
        
      </Footer>
    </Router>
    </>
  );
}

export default App;
