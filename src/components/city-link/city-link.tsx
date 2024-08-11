import { FC, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CityName } from '../../types/city';
import { useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/selectors';


interface CityLinkProps {
  city: CityName;
  isActive?: boolean;
}

const CityLinkComponent: FC<CityLinkProps> = ({ city, isActive = false }) => {
  const dispatch = useAppDispatch();
  const handleClick = useCallback((evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(selectCity(city));
  }, [city, dispatch]);

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

export const CityLink = memo(CityLinkComponent);
