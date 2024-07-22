import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { getHelmetTitle, getPageClass } from '../../utils';
import { FC } from 'react';
import { MockFavorites } from '../../mock/favorites';
import { Helmet } from 'react-helmet-async';

const Layout: FC = () => {
  const { pathname } = useLocation();
  const favorites = MockFavorites;
  const pageClass = getPageClass(pathname, favorites.length);

  return (
    <>
      <Helmet>
        <title>{getHelmetTitle(pathname)}</title>
      </Helmet>
      <div className={`page ${pageClass}`}>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
