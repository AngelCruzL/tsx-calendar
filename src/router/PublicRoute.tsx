import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CustomAuthenticatedRoute } from '../interfaces';

// prettier-ignore
const PublicRoute = ({ isAuthenticated, component: Component, ...rest } : CustomAuthenticatedRoute) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
