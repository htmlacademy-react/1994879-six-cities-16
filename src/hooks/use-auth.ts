import { useAppSelector } from '.';
import { isAuthorized } from '../store/selectors';

export const useAuth = () => useAppSelector(isAuthorized);
