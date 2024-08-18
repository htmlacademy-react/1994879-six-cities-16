import { createSelector } from 'reselect';
import { State } from '../hooks';
import { appSlice } from './app-slice/app-slice';

export const { selectCity, selectSortType } = appSlice.actions;

const getAppState = (state: State) => state.app;
const getUserState = (state: State) => state.user;
const getFavoriteState = (state: State) => state.favorite;
const getOffersState = (state: State) => state.offers;
const getCommentState = (state: State) => state.comment;

export const activeCity = createSelector(getAppState, (app) => app.city);
export const activeSortType = createSelector(getAppState, (app) => app.sortType);

export const userInfo = createSelector(getUserState, (user) => user.user);
export const authorizationStatus = createSelector(getUserState, (user) => user.authorizationStatus);

export const allFavorites = createSelector(getFavoriteState, (favorite) => ({
  favorites: favorite.offers.entity || [],
  isLoading: favorite.offers.status === 'loading',
}));
export const favoritesCount = createSelector(
  getFavoriteState,
  (favorite) => favorite.offers.status === 'done' ? favorite.offers.entity?.length ?? 0 : '...');
export const isNewFavoriteLoading = createSelector(getFavoriteState, (favorite) => favorite.offer.status === 'loading');

export const allOffers = createSelector(getOffersState, (offers) => ({
  offers: offers.offers.entity || [],
  isLoading: offers.offers.status === 'loading',
}));

export const fullOffer = createSelector(getOffersState, (offers) => ({
  offer: offers.offer.entity,
  isLoading: offers.offer.status === 'loading',
}));

export const allNearOffers = createSelector(getOffersState, (offers) => ({
  nearOffers: offers.nearOffers.entity || [],
  isLoading: offers.nearOffers.status === 'loading',
}));

export const allComments = createSelector(getCommentState, (comment) => ({
  comments: comment.comments.entity || [],
  isLoading: comment.comments.status === 'loading',
}));

export const newComment = createSelector(getCommentState, (comment) => ({
  comment: comment.newComment.entity,
  isPosting: comment.newComment.status === 'loading',
  isSuccess: comment.newComment.status === 'done',
}));
