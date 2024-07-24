import { FC, useState } from 'react';
import { Offer } from '../../types/offer';
import { PlaceCard } from '../place-card';
import { PlacesSorting } from './places-sorting';
import { Map } from '../map';
import { Cities } from '../../const';
import { CityName } from '../../types/city';
import { OfferSortFunction } from './const';

interface PlacesProps {
  city: CityName;
  offers: Offer[];
}

export const Places: FC<PlacesProps> = ({ city, offers }) => {
  const [ selectedOffer, setSelectedOffer ] = useState<Offer>();
  const [ sortedOffers, setSortedOffers ] = useState<Offer[]>(offers ?? []);
  const cityLocation = Cities[city];

  const handleHover = (newOffer: Offer | undefined) => setSelectedOffer(newOffer);
  const handleSorting = (sortFunction: OfferSortFunction | undefined) => {
    setSortedOffers(offers.sort(sortFunction));
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${sortedOffers.length} places to stay in ${city}`}</b>
        <PlacesSorting onSort={handleSorting} />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) =>
            <PlaceCard key={offer.id} typeCard='cities' offer={offer} onHover={handleHover} />
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
