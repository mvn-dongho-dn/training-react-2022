import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }) {
  let { isLogged } = useAuth();

  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       isLogged ? (
  //         children
  //       ) : (
  //         <Navigate
  //           to={{
  //             pathname: "/auth/login",
  //             state: { from: location }
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
  return isLogged ? children : <Navigate to={{pathname: '/auth/login'}} />
}
