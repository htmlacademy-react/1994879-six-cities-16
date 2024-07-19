
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus } from '../../const';
import { FC } from 'react';

type Props = {
  authenticationStatus: AuthenticationStatus;
  isLoginLocation?: boolean;
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ authenticationStatus, isLoginLocation = false, children }) => {
  const redirectRoute = isLoginLocation ? AppRoute.Main : AppRoute.Login;

  return authenticationStatus === (isLoginLocation ? AuthenticationStatus.NoAuth : AuthenticationStatus.Auth)
    ? children
    : <Navigate to={redirectRoute} />;
};
