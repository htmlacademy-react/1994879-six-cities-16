import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import { getPageClass } from '../../utils';
import { FC } from 'react';

const Layout: FC = () => {
  const { pathname } = useLocation();
  const pageClass = getPageClass(pathname);
  const childClass = '';

  return (
    <div className={`page ${pageClass} ${childClass}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
