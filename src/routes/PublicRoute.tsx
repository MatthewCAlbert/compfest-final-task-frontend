import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '@/context/AuthContext';

export default function PublicRoute({ Component, ...rest }: {
  Component: any,
  exact?: boolean,
  path?: string,
}) {
  const authContext = useContext(AuthContext);

  return (
    <Route
      render={props => !authContext.isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: "/" }} />)
      }
    />
  )
};