import { authContext } from '@/utils/auth';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ Component, ...rest }: {
  Component: any,
  exact?: boolean,
  path?: string,
}) {

  return (
    <Route {...rest}
      render={props => authContext.isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: "/login", state: {from: props.location} }} />)
      }
    />
  )
};