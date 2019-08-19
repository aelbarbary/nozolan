import React, { Component } from 'react';
import Home from './components/Home/index';


import Login from './components/Login/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/global.sass';
import ReactGA from 'react-ga';
import { SharedDataProvider } from './context/SharedData.context.js';
import { withAuthenticator } from 'aws-amplify-react';

import Amplify, { Auth, Hub } from 'aws-amplify';
import awsmobile from './aws-exports.js';

Amplify.configure(awsmobile);

ReactGA.initialize('UA-131219503-1');
ReactGA.pageview('/');

class App extends Component {

  componentDidMount() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.setState({ user: data });
          break;
        case "signOut":
          this.setState({ user: null });
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => console.log("Not signed in"));
  }

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
