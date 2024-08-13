import { Link } from 'react-router-dom';
import { LogoSettings, LogoType } from './const';
import { AppRoute } from '../../const';
import { FC, memo } from 'react';

type LogoProps = {
  type: LogoType;
  isActive?: boolean;
}

const LogoComponent: FC<LogoProps> = ({ type , isActive = false }) => {
  const { width, height } = LogoSettings[type];
  const className = `${type}__logo-link ${isActive ? `${type}__logo-link--active` : ''}`;

  return (
    <Link to={AppRoute.Main} className={className}>
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
};

export const Logo = memo(LogoComponent);
