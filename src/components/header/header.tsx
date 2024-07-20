import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Logo } from '../logo';
import { FC } from 'react';
import { HeaderNav } from './header-nav';

export const Header: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const isActive = pathname === AppRoute.Main as string;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType='header' isActive={isActive}/>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
