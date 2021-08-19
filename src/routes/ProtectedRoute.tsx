import { rolesEnum } from '@/config/enums';
import { useSelector } from '@/hooks/useReduxSelector';
import ErrorPage from '@/pages/ErrorPage';
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

  const handleRedirect = (props)=>{
    if ( !authContext.isAuthenticated() )
      return <Redirect to={{ pathname: "/login", state: {from: props.location} }}/>;
    if ( !requiredRoles || requiredRoles?.length < 1 || requiredRoles?.includes(current_role) )
      return <Component {...props} />
    else
      return <ErrorPage title={"Halaman tidak tersedia"} code={403} message={"Halaman tidak tersedia"}/>;
  }

  return (
    <Route {...rest}
      render={handleRedirect}
    />
  )
};