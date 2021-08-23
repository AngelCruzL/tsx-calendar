import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CustomAuthenticatedRoute } from '../interfaces';

const PrivateRoute = (props: CustomAuthenticatedRoute) => {
  const { isAuthenticated, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
