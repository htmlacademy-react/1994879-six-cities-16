import { Outlet } from 'react-router-dom';
import Header from '../header/header';

const Layout = () => (
  <>
    <Header isActiveClass isLogged />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
