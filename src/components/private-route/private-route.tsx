
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../spinner';
import { authorization } from '../../store/selectors';

type Props = {
  isLoginLocation?: boolean;
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ isLoginLocation = false, children }) => {
  const authorizationStatus = useAppSelector(authorization);
  const redirectRoute = isLoginLocation ? AppRoute.Main : AppRoute.Login;

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner message='Waiting authorization check' />;
  }

  return authorizationStatus === (isLoginLocation ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
    ? children
    : <Navigate to={redirectRoute} />;
};
