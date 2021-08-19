import { rolesEnum } from '@/config/enums';
import { useSelector } from '@/hooks/useReduxSelector';
import { authContext } from '@/utils/auth';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ Component, requiredRoles = [], ...rest }: {
  Component: any,
  exact?: boolean,
  requiredRoles?: rolesEnum[],
  path?: string,
}) {
  const auth = useSelector((state)=> state.auth);
  const initialUserData = authContext.getUser();

  const current_role = auth?.user?.role || initialUserData?.role;

  return (
    <Route {...rest}
      render={props => authContext.isAuthenticated() && (!requiredRoles || requiredRoles?.length < 1 || requiredRoles?.includes(current_role))
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: "/login", state: {from: props.location} }} />)
      }
    />
  )
};