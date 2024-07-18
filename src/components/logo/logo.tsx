import { Link } from 'react-router-dom';
import { LogoSettings, LogoType } from './const';
import { AppRoute } from '../../const';

type LogoProps = {
  logoType: LogoType;
  isActive?: boolean;
}

export const Logo = ({ logoType , isActive = false }: LogoProps): JSX.Element => {
  const { width, height } = LogoSettings[logoType];
  const prefix = logoType;
  const className = `${prefix}__logo-link ${isActive ? `${prefix}__logo-link--active` : ''}`;

  return (
    <Link to={AppRoute.Main} className={className}>
      <img
        className={`${prefix}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
};
