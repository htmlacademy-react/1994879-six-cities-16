import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { getHelmetTitle, getPageClass } from '../../utils';
import { FC, memo, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { favoritesCount } from '../../store/selectors';

const LayoutComponent: FC = () => {
  const { pathname } = useLocation();
  const count = useAppSelector(favoritesCount);

  const pageClass = useMemo(() => getPageClass(pathname, count === 0), [pathname, count]);
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

export const Layout = memo(LayoutComponent);
