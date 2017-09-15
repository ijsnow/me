import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import * as pages from './pages';

const routes = Object.keys(pages).map(key => pages[key]);

const Routes = () => (
  <Router>
    <Switch>
      {routes.map((page, i) => (
        <Route
          key={`route-comp-${i.toString()}`}

          {...page}
        />
      ))}
    </Switch>
  </Router>
);

export default Routes;