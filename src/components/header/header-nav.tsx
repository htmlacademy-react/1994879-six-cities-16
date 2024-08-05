import { FC, memo, useCallback, useMemo } from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/user-slice/thunk';
import { favoritesOffersCount, isUserLogged, userEmail } from '../../store/selectors';


const HeaderNavComponent: FC = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(userEmail);
  const isLogged = useAppSelector(isUserLogged);
  const favoritesCount = useAppSelector(favoritesOffersCount);

  const handleSignOutClick = useCallback((evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logout());
  }, [dispatch]);

  const userInfo = useMemo(() => (
    <>
      <span className="header__user-name user__name">{email}</span>
      <span className="header__favorite-count">{favoritesCount}</span>
    </>
  ), [email, favoritesCount]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {isLogged ? userInfo : <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {isLogged &&
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
