import { createSelector } from 'reselect';
import { State } from '../hooks';
import { AuthorizationStatus } from '../const';
import { appSlice } from './app-slice/app-slice';

export const { selectCity, selectSortType } = appSlice.actions;

const getAppState = (state: State) => state.app;
const getUserState = (state: State) => state.user;
const getFavoriteState = (state: State) => state.favorite;
const getOffersState = (state: State) => state.offers;
const getCommentState = (state: State) => state.comment;

export const activeCity = createSelector(getAppState, (app) => app.city);
export const activeSortType = createSelector(getAppState, (app) => app.sortType);

export const userEmail = createSelector(getUserState, (user) => user.user?.email || '');
export const isUserLogged = createSelector(getUserState, (user) => user.authorizationStatus === AuthorizationStatus.Auth);

export const favoritesOffers = createSelector(getFavoriteState, (favorite) => ({
  favorites: favorite.offers.entity || [],
  isLoading: favorite.offers.loading,
}));
//export const favoritesOffersCount = createSelector(getFavoriteState, (favorite) => favorite.offers.entity?.length || 0);
export const favoritesOffersCount = (state: State) => state.favorite.offers.entity?.length || 0;

export const allOffers = createSelector(getOffersState, (offers) => ({
  offers: offers.offers.entity || [],
  isLoading: offers.offers.loading,
}));

export const fullOffer = createSelector(getOffersState, (offers) => ({
  offer: offers.offer.entity,
  isLoading: offers.offer.loading,
}));

export const allNearOffers = createSelector(getOffersState, (offers) => ({
  nearOffers: offers.nearOffers.entity || [],
  isLoading: offers.nearOffers.loading,
}));

export const allComments = createSelector(getCommentState, (comment) => ({
  comments: comment.comments.entity || [],
  isLoading: comment.comments.loading,
}));

export const newComment = createSelector(getCommentState, (comment) => ({
  comment: comment.newComment.entity,
  isLoading: comment.newComment.loading,
}));
