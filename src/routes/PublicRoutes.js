import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../views/About';
import Login from '../views/Login';

export default function PublicRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Login />} />
        <Route exact path="/about" component={() => <About />} />
      </Switch>
    </>
  );
}
