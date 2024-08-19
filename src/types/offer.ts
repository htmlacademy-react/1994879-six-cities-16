import { City, Location } from './city';
import { User } from './user';

export type OfferClassType = 'place-card' | 'offer';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  previewImage?: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OfferFull = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}
