import { Offer } from '../../types/offer';

export type PlacesOptionType = 'popular' | 'price-low' | 'price-high' | 'top-rated' ;

export type OfferSortFunction = (a: Offer, b: Offer) => number;

export type PlacesOption = {
  text: string;
  sort: OfferSortFunction | undefined;
}

export const PlacesOptions: Record<PlacesOptionType, PlacesOption> = {
  'popular': {
    text: 'Popular',
    sort: undefined,
  },
  'price-low': {
    text: 'Price: low to high',
    sort: (a, b) => a.price - b.price,
  },
  'price-high': {
    text: 'Price: high to low',
    sort: (a, b) => b.price - a.price,
  },
  'top-rated': {
    text: 'Top rated first',
    sort: (a, b) => b.rating - a.rating,
  },
};
