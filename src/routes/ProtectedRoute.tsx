import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '@/contexts/AuthContext';

export default function PrivateRoute({ Component, ...rest }: {
  Component: any,
  exact?: boolean,
  path?: string,
}) {
  const authContext = useContext(AuthContext);

  return (
    <Route
      render={props => authContext.isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: "/login" }} />)
      }
    />
  )
};