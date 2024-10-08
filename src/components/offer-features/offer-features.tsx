import { FC, memo } from 'react';
import { getBedroomsText, getAdultsText } from './utils';
import { getCapitalizedText } from '../../utils';

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

const OfferFeaturesComponent: FC<OfferFeaturesProps> = ({ type, bedrooms, maxAdults }) => (
  <ul className="offer__features">
    <li className="offer__feature offer__feature--entire">{getCapitalizedText(type)}</li>
    <li className="offer__feature offer__feature--bedrooms">{getBedroomsText(bedrooms)}</li>
    <li className="offer__feature offer__feature--adults">{getAdultsText(maxAdults)}</li>
  </ul>
);

export const OfferFeatures = memo(OfferFeaturesComponent);
