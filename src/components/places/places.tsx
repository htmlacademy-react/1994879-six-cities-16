import { FC, useState } from 'react';
import { Offer } from '../../types/offer';
import { PlaceCard } from '../place-card';
import { PlacesSorting } from './places-sorting';
import { Map } from '../map';
import { Cities } from '../../const';
import { CityName } from '../../types/city';

interface PlacesProps {
  city: CityName;
  offers: Offer[];
}

export const Places: FC<PlacesProps> = ({ city, offers }) => {
  const [ selectedOffer, setSelectedOffer ] = useState<Offer>();
  const cityLocation = Cities[city];

  const handleHover = (newOffer: Offer | undefined) => setSelectedOffer(newOffer);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
        <PlacesSorting />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) =>
            <PlaceCard key={offer.id} typeCard='cities' offer={offer} onHover={handleHover} />
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={cityLocation} offers={offers} selectedOffer={selectedOffer} />
        </section>
      </div>
    </div>
  );
};
