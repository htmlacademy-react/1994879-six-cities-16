import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

interface CityLinkProps {
  city: string;
  isActive?: boolean;
}

export const CityLink: FC<CityLinkProps> = ({ city, isActive = false }) => (
  <Link
    to={AppRoute.Main}
    className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
  >
    <span>{city}</span>
  </Link>
);
