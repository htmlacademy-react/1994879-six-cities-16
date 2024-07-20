import { FC } from 'react';
import { AppRoute, MockedHeaderSettings } from '../../const';
import { Link } from 'react-router-dom';
import { MockFavorites } from '../../mock/favorites';

export const HeaderNav: FC = () => {
  const { email, isLogged } = MockedHeaderSettings;
  const favorites = MockFavorites;

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
            <a className="header__nav-link" href="#">
              {signOut}
            </a>
          </li>}
      </ul>
    </nav>
  );
};

