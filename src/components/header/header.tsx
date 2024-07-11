import { MockedHeaderSettings } from '../../const';

export type HeaderProps = {
  isActiveClass: boolean;
  isLogged: boolean;
}

const HeaderNav = (): JSX.Element => {
  const { email, favoriteCount, isLogged } = MockedHeaderSettings;
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{email}</span>
            <span className="header__favorite-count">{favoriteCount}</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">{isLogged ? 'Sign out' : 'Sign in'}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header = ({ isActiveClass = false, isLogged = false}: HeaderProps): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className={`header__logo-link ${isActiveClass ? 'header__logo-link--active' : ''}`}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </a>
        </div>
        { isLogged ? <HeaderNav /> : null }
      </div>
    </div>
  </header>
);

export default Header;