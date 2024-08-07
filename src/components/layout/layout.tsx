import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { getHelmetTitle, getPageClass } from '../../utils';
import { FC, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { favoritesOffersCount } from '../../store/selectors';
import { shallowEqual } from 'react-redux';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const favoritesCount = useAppSelector(favoritesOffersCount, shallowEqual);

  const pageClass = useMemo(() => getPageClass(pathname, favoritesCount === 0), [pathname, favoritesCount]);
  const helmetTitle = useMemo(() => getHelmetTitle(pathname), [pathname]);

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <div className={`page ${pageClass}`}>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

