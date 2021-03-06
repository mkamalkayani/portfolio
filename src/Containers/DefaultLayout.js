import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';
import InnovationTool from '../Views/InnovationTool/InnovationTool';

const DefaultLayout = () => {
  return (
    <div className="main">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/portfolio/InnovationTool" component={InnovationTool} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default DefaultLayout;
