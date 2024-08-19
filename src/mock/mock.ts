import { Comment } from '../types/comment';
import faker from 'faker';
import { LoggedUser, User } from '../types/user';
import { Offer, OfferFull } from '../types/offer';
import { City, Location } from '../types/city';
import { AuthorizationStatus, cityNames, DEFAULT_CITY, Cities } from '../const';
import { State } from '../hooks';

const makeFakeUser = (): User => ({
  name: faker.name.firstName(),
  avatarUrl: faker.internet.url(),
  isPro: Boolean(faker.datatype.number(1)),
});

export const makeFakeUserWithEmail = (): LoggedUser => ({
  ...makeFakeUser(),
  email: faker.internet.email(),
  token: faker.internet.password(),
});

const makeFakeLocation = (): Location => ({
  latitude: faker.datatype.number({ min: 100, max: 500 }),
  longitude: faker.datatype.number({ min: 100, max: 500 }),
  zoom: faker.datatype.number(),
});

const makeFakeCity = (): City => ({
  name: cityNames[faker.datatype.number(cityNames.length)],
  location: makeFakeLocation(),
});

export const makeFakeComment = (): Comment => ({
  id: faker.datatype.uuid(),
  date: faker.date.past().toISOString(),
  comment: faker.helpers.createCard().posts[0].sentences,
  rating: faker.datatype.number({ min: 1, max: 5 }),
  user: makeFakeUser(),
});

export const makeFakeComments = (): Comment[] =>
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, makeFakeComment);

export const makeFakeOffer = (): Offer => ({
  id: faker.datatype.uuid(),
  title: faker.name.title(),
  type: faker.database.type(),
  price: Number(faker.commerce.price()),
  city: makeFakeCity(),
  location: makeFakeCity().location,
  previewImage: faker.internet.url(),
  isFavorite: Boolean(faker.datatype.number(1)),
  isPremium: Boolean(faker.datatype.number(1)),
  rating: faker.datatype.number({ min: 1, max: 5 }),
});

export const makeFakeOffers = (): Offer[] =>
  Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, makeFakeOffer);

export const makeFakeOfferFull = (offer?: Offer) : OfferFull => {
  const baseOffer = offer ?? makeFakeOffer();
  return ({
    ...baseOffer,
    description: faker.commerce.productDescription(),
    bedrooms: faker.datatype.number({ min: 1, max: 7 }),
    goods: [faker.lorem.word(5)],
    host: makeFakeUser(),
    images: [ faker.internet.url(), faker.internet.url()],
    maxAdults: faker.datatype.number({ min: 1, max: 5 }),
  });
};

export const makeFakeInitState = (): Partial<State> => ({
  user: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: makeFakeUserWithEmail(),
  },
  offers: {
    offers: {entity: [], status: 'none'},
    offer: {entity: undefined, status: 'none'},
    nearOffers: {entity: [], status: 'none'}
  },
  favorite: {
    offer: {entity: undefined, status: 'none'},
    offers: {entity: [], status: 'none'}
  },
  app: {
    city: Cities[DEFAULT_CITY],
    sortType: 'popular'
  },
  comment: {
    newComment: {entity: undefined, status: 'none'},
    comments: {entity: [], status: 'none'}
  }
});

export const makeFakeNotAuthState = (): Partial<State> => {
  const initState = makeFakeInitState();
  return {
    ...initState,
    user: {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: undefined,
    }
  };
};
