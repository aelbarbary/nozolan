import React from 'react';
import { hot } from 'react-hot-loader/root';

import Home from './pages/Home';
import SentryBoundary from './utils/SentryBoundary';

const App = () => (
  <SentryBoundary>
    <Home />
    <h1>Hello</h1>
  </SentryBoundary>
);

export default hot(App);
