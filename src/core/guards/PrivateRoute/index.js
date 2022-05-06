import React from 'react'
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }) {
  let { isLogged } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
