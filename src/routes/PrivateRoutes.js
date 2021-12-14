import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Dogs from '../views/Dogs';
import Profile from '../views/Profile';
import Home from '../views/Home';
import EditDog from '../views/EditDog';
import CreateDog from '../views/CreateDog';
import SingleDog from '../views/SingleDog';
import CreateTask from '../views/CreateTask';
import EditTask from '../views/EditTask';

export default function PrivateRoutes({ user }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route
          exact
          path="/dashboard"
          component={() => <Dashboard user={user} />}
        />
        <Route exact path="/dogs" component={() => <Dogs user={user} />} />
        <Route
          exact
          path="/dogs/:dogFirebaseKey"
          component={() => <SingleDog user={user} />}
        />
        <Route exact path="/new" component={() => <CreateDog user={user} />} />
        <Route
          exact
          path="/profile"
          component={() => <Profile user={user} />}
        />
        <Route
          exact
          path="/edit/:dogFirebaseKey"
          component={() => <EditDog user={user} />}
        />
        <Route
          exact
          path="/edit/:taskFirebaseKey"
          component={() => <EditTask user={user} />}
        />
        <Route
          exact
          path="/dogs/:dogFirebaseKey/new_task"
          component={() => <CreateTask user={user} />}
        />
      </Switch>
    </>
  );
}

PrivateRoutes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

PrivateRoutes.defaultProps = {
  user: {},
};
