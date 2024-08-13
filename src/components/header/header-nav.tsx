import { FC, memo, useCallback, useMemo } from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/user-slice/thunk';
import { favoritesCount, userEmail } from '../../store/selectors';
import { useAuth } from '../../hooks/use-auth';


const HeaderNavComponent: FC = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(userEmail);
  const { isAuthorized } = useAuth();
  const count = useAppSelector(favoritesCount);

  const userInfo = useMemo(() => (
    <>
      <span className="header__user-name user__name">{email}</span>
      <span className="header__favorite-count">{count}</span>
    </>
  ), [email, count]);

  const handleSignOutClick = useCallback((evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logout());
  }, [dispatch]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {isAuthorized ? userInfo : <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {isAuthorized &&
          <li className="header__nav-item">
            <Link to="" className="header__nav-link" onClick={handleSignOutClick}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
};

export const HeaderNav = memo(HeaderNavComponent);
