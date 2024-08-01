
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';

type Props = {
  isLoginLocation?: boolean;
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ isLoginLocation = false, children }) => {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const redirectRoute = isLoginLocation ? AppRoute.Main : AppRoute.Login;

  return authorizationStatus === (isLoginLocation ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
    ? children
    : <Navigate to={redirectRoute} />;
};
