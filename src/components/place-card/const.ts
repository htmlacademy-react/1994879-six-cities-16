export type PlaceCardType = 'cities' | 'favorites' | 'near-places';


export const PlaceCardSettings: Record<PlaceCardType, string> = {
  'cities': 'cities__card',
  'favorites': 'favorites__card',
  'near-places': 'near-places__card',
} as const;
