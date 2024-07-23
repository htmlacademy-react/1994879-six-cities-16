import { Link } from 'react-router-dom';
import { LogoSettings, LogoType } from './const';
import { AppRoute } from '../../const';
import { FC } from 'react';

type LogoProps = {
  logoType: LogoType;
  isActive?: boolean;
}

export const Logo: FC<LogoProps> = ({ logoType , isActive = false }) => {
  const { width, height } = LogoSettings[logoType];
  const type = logoType;
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
