import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

interface CityLinkProps {
  city: string;
  isActive?: boolean;
  onCityChange: (city: string) => void;
}

export const CityLink: FC<CityLinkProps> = ({ city, isActive = false, onCityChange }) => {
  const handleClick = () => onCityChange(city);

  return (
    <Link
      to={AppRoute.Main}
      className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
      onClick={handleClick}
    >
      <span>{city}</span>
    </Link>
  );
};
