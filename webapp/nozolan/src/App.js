import React, { Component } from 'react';
import Home from './components/Home/index';

import Store from './components/Store/index.js';
import Login from './components/Login/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/global.sass';
import ReactGA from 'react-ga';
import { SharedDataProvider } from './context/SharedData.context.js';

ReactGA.initialize('UA-131219503-1');
ReactGA.pageview('/');

class App extends Component {

  render() {

    return (
        <Router>
          <SharedDataProvider>
              <Switch>
                <Route path="/login/" component={Login}></Route>
                <Route path="/" component={Home}></Route>
              </Switch>
            </SharedDataProvider>
        </Router>
    );
  }
}

export default App;
