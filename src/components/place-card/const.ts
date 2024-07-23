import { ComponentSize } from '../../types/common';

export type PlaceCardType = 'cities' | 'favorites' | 'near-places';

export type PlaceCardOption = ComponentSize & {
  baseClass: string;
  infoClass: string;
}

const DefaultPlaceCardOption: PlaceCardOption = {
  baseClass: 'cities__card',
  infoClass: '',
  width: 260,
  height: 200
};

export const PlaceCardSettings: Record<PlaceCardType, PlaceCardOption> = {
  'cities': {
    ...DefaultPlaceCardOption,
  },
  'favorites': {
    baseClass: 'favorites__card',
    infoClass: 'favorites__card-info',
    width: 150,
    height: 110
  },
  'near-places': {
    ...DefaultPlaceCardOption,
    baseClass: 'near-places__card',
  },
} as const;
