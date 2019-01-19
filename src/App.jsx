import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import AdoptiveParent from './components/AdoptiveParent';
import Documents from './components/Documents';
import Information from './components/Information';
import Test from './components/Test';
import Fosternoe from './components/Fosternoe';
import Opekunstvo from './components/Opekunstvo';
import Usynovlenie from './components/Usynovlenie';
import AboutParents from './components/AboutParents';
import Children from './components/Children';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/adopt" component={AdoptiveParent} />
          <Route exact path="/docs" component={Documents} />
          <Route exact path="/info" component={Information} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/fost" component={Fosternoe} />
          <Route exact path="/opekunstvo" component={Opekunstvo} />
          <Route exact path="/usynovlenie" component={Usynovlenie} />
          <Route exact path="/aboutParents" component={AboutParents} />
          <Route exact path="/child" component={Children} />

        </div>
      </Router>
    );
  }
}

export default App;
