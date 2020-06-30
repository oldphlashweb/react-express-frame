import React, { Component } from 'react';
import './App.css';
import Navbar from './partials/navbar'
import About from './pages/about'
import Home from './pages/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
