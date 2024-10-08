import { FC, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

  const handleLinkClick = useCallback((evt: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === String(AppRoute.Main)) {
      evt.preventDefault();
    }
    dispatch(selectCity(city));
  }, [city, dispatch, pathname]);

  return (
    <Link
      to={AppRoute.Main}
      className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
      onClick={handleLinkClick}
    >
      <span>{city}</span>
    </Link>
  );
};

export const CityLink = memo(CityLinkComponent);
