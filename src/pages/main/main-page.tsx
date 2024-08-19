import { CityLinkList } from '../../components/city-link';
import { NoPlaces } from '../../components/no-places';
import { Places } from '../../components/places';
import { isEmpty } from '../../utils';
import { allOffers, activeCity } from '../../store/selectors';
import { useAppSelector } from '../../hooks';
import { FC, useMemo } from 'react';
import { Spinner } from '../../components/spinner';
import { LoadingMessage } from '../../const';

export const MainPage: FC = () => {
  const { name: cityName } = useAppSelector(activeCity);
  const { offers, isLoading } = useAppSelector(allOffers);

  const filteredOffers = useMemo(() => offers.filter((offer) => offer.city.name === cityName), [cityName, offers]);
  const isEmptyOffers = useMemo(() => isEmpty(filteredOffers), [filteredOffers]);

  if (isLoading) {
    return <Spinner message={LoadingMessage.Offers} />;
  }

  return (
    <main className={`page__main page__main--index ${isEmptyOffers && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityLinkList activeCity={cityName} />
      </div>
      <div className="cities">
        {isEmptyOffers ?
          <NoPlaces city={cityName} /> :
          <Places city={cityName} offers={filteredOffers}/>}
      </div>
    </main>
  );
};
