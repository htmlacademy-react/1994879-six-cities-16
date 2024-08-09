import { useAppSelector } from '.';
import { AuthorizationStatus } from '../const';
import { authorizationStatus } from '../store/selectors';

export const useAuth = () => {
  const status = useAppSelector(authorizationStatus);
  return {
    isAuthorized: status === AuthorizationStatus.Auth,
    isAuthorizing: status === AuthorizationStatus.Unknown
  };
};
