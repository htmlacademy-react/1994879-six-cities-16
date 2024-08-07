import { FC, useCallback, useState } from 'react';
import { Offer } from '../../types/offer';
import { PlaceCard } from '../place-card';
import { PlacesSorting } from './places-sorting';
import { Map } from '../map';
import { Cities } from '../../const';
import { CityName } from '../../types/city';
import { PlacesSortOptions } from './const';
import { useAppSelector } from '../../hooks';
import { activeSortType } from '../../store/selectors';

interface PlacesProps {
  city: CityName;
  offers: Offer[];
}

export const Places: FC<PlacesProps> = ({ city, offers }) => {
  const [ selectedOffer, setSelectedOffer ] = useState<Offer>();

  const sortType = useAppSelector(activeSortType);
  const sortedOffers = offers.slice().sort(PlacesSortOptions[sortType].sort);
  const cityLocation = Cities[city];

  const handleHover = useCallback((newOffer: Offer | undefined) => {
    setSelectedOffer(newOffer);
  }, [setSelectedOffer]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {`${sortedOffers.length} place${sortedOffers.length > 1 ? 's' : ''} to stay in ${city}`}
        </b>
        <PlacesSorting />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) =>
            <PlaceCard key={offer.id} typeCard='cities' offer={offer} onCardHover={handleHover} />
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={cityLocation} offers={sortedOffers} selectedOffer={selectedOffer} />
        </section>
      </div>
    </div>
  );
};
