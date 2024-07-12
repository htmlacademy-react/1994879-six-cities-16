
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus } from '../../const';

type Props = {
  authenticationStatus: AuthenticationStatus;
  children: JSX.Element;
}

export const PrivateRoute = ({ authenticationStatus, children }: Props) => (
  authenticationStatus === AuthenticationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);
