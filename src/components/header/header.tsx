import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Logo } from '../logo';
import { FC, memo } from 'react';
import { HeaderNav } from './header-nav';

const HeaderComponent: FC = () => {
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

export const Header = memo(HeaderComponent);
