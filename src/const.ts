import { City, CityName } from './types/city';

export const DEFAULT_CITY: CityName = 'Paris';

export const MockedHeaderSettings = {
  email: 'Oliver.conner@gmail.com',
  isLogged: true
};

export const DateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric'
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Endpoint {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments',
}

export const Cities: Record<CityName, City > = {
  Paris: { name: 'Paris', location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 } },
  Cologne: { name: 'Cologne', location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 } },
  Brussels: { name: 'Brussels', location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } },
  Amsterdam: { name: 'Amsterdam', location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 } },
  Hamburg: { name: 'Hamburg', location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 } },
  Dusseldorf: { name: 'Dusseldorf', location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 } },
};
