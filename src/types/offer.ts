export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}


type OfferAbstract = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type Offer = OfferAbstract & {
  previewImage: string;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferFull = OfferAbstract & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}
