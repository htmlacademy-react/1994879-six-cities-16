import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { getHelmetTitle, getPageClass } from '../../utils';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { favoritesOffersCount } from '../../store/selectors';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const favoritesCount = useAppSelector(favoritesOffersCount);
  const pageClass = getPageClass(pathname, favoritesCount);

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
