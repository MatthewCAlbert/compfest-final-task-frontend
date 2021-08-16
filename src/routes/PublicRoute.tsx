import React from 'react';
import { Route } from 'react-router-dom';

export default function PublicRoute({ Component, ...rest }: {
  Component: any,
  exact?: boolean,
  path?: string,
}) {
  return (
    <Route
      render={props => <Component {...props} />}
    />
  )
};