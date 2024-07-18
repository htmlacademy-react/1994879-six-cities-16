
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus } from '../../const';

type Props = {
  authenticationStatus: AuthenticationStatus;
  isLoginLocation?: boolean;
  children: JSX.Element;
}

export const PrivateRoute = ({ authenticationStatus, isLoginLocation, children }: Props) => {
  const redirectRoute = isLoginLocation ? AppRoute.Main : AppRoute.Login;

  return authenticationStatus === (isLoginLocation ? AuthenticationStatus.NoAuth : AuthenticationStatus.Auth)
    ? children
    : <Navigate to={redirectRoute} />;
};
