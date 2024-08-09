
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FC } from 'react';
import { useAuth } from '../../hooks/use-auth';

type Props = {
  isLoginLocation?: boolean;
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ isLoginLocation = false, children }) => {
  const { isAuthorized } = useAuth();

  if (isLoginLocation) {
    return isAuthorized
      ? <Navigate to={AppRoute.Main} />
      : children;
  }

  return isAuthorized
    ? children
    : <Navigate to={AppRoute.Login} />;
};
