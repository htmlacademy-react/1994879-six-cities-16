import { CityLinkList } from '../components/city-link';
import { NoPlaces } from '../components/no-places';
import { Places } from '../components/places';
import { isEmpty } from '../utils';
import { getActiveCity } from '../store/app-slice';
import { useAppSelector } from '../hooks';
import { getOffers } from '../store/offer-slice';
import { FC } from 'react';
import { Spinner } from '../components/spinner';


export const MainPage: FC = () => {
  const { name: cityName } = useAppSelector(getActiveCity);
  const { loading: isLoading, value: offers } = useAppSelector(getOffers);

  const cityOffers = offers.filter((offer) => offer.city.name === cityName);
  const isEmptyOffers = isEmpty(cityOffers);

  return (
    <main className={`page__main page__main--index ${isEmptyOffers && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityLinkList activeCity={cityName} />
      </div>
      <div className="cities">
        <Spinner isLoading={isLoading} message='Loading offers' />

        {isEmptyOffers ?
          <NoPlaces city={cityName} /> :
          <Places city={cityName} offers={cityOffers}/>}
      </div>
    </main>
  );
};
