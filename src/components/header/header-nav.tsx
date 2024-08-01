import { FC } from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/favorite-slice/selectors';
import { getUserInfo } from '../../store/user-slice/selectors';
import { logout } from '../../store/user-slice/thunk';


export const HeaderNav: FC = () => {
  const dispatch = useAppDispatch();
  const {email, isLogged} = useAppSelector(getUserInfo);
  const favorites = useAppSelector(getFavorites).value ?? [];

  const handleSignOutClick = async () => await dispatch(logout());

  const signIn = <span className="header__login">Sign in</span>;
  const signOut = <span className="header__signout">Sign out</span>;
  const userInfo = (
    <>
      <span className="header__user-name user__name">{email}</span>
      <span className="header__favorite-count">{favorites.length}</span>
    </>
  );

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {isLogged ? userInfo : signIn}
          </Link>
        </li>
        {isLogged &&
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={() => handleSignOutClick}>
              {signOut}
            </a>
          </li>}
      </ul>
    </nav>
  );
};

