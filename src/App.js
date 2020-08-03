import React from 'react';
import HomePage from './Commponants/HomePage';
import Projects from './Commponants/Projects';
import Project from './Commponants/Project';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function () {

  return (
    <div>
     <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/view-projects">
            <Projects />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}





