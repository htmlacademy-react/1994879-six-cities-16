import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { getPageClass } from '../../utils';
import { FC } from 'react';
import { MockFavorites } from '../../mock/favorites';

const Layout: FC = () => {
  const { pathname } = useLocation();
  const favorites = MockFavorites;
  const pageClass = getPageClass(pathname, favorites.length);

  return (
    <div className={`page ${pageClass}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
