import { FC } from 'react';
import { getBedroomsText, getAdultsText, firstLetterUpperCase } from './utils';

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export const OfferFeatures: FC<OfferFeaturesProps> = ({ type, bedrooms, maxAdults }) => (
  <ul className="offer__features">
    <li className="offer__feature offer__feature--entire">{firstLetterUpperCase(type)}</li>
    <li className="offer__feature offer__feature--bedrooms">{getBedroomsText(bedrooms)}</li>
    <li className="offer__feature offer__feature--adults">{getAdultsText(maxAdults)}</li>
  </ul>
);
