import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import { getPageClass } from '../../utils';

const Layout = (): JSX.Element => {
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
