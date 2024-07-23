
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FC } from 'react';

type Props = {
  authorizationStatus: AuthorizationStatus;
  isLoginLocation?: boolean;
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ authorizationStatus, isLoginLocation = false, children }) => {
  const redirectRoute = isLoginLocation ? AppRoute.Main : AppRoute.Login;

  return authorizationStatus === (isLoginLocation ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
    ? children
    : <Navigate to={redirectRoute} />;
};
