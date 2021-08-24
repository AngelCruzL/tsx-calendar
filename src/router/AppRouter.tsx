import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { startChecking } from '../actions/auth';
import { ReducersState } from '../reducers/rootReducer';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import Loader from '../components/ui/Loader';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  const checking = useSelector<ReducersState>(state => state.auth.checking);
  const uid = useSelector<ReducersState>(state => state.auth.uid);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={!!uid}
        />

        <PrivateRoute
          exact
          path="/"
          component={CalendarScreen}
          isAuthenticated={!!uid}
        />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
