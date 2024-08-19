import { describe } from 'vitest';
import { activeCity, activeSortType, allComments, allFavorites, allNearOffers, allOffers, authorizationStatus, favoritesCount, fullOffer, isNewFavoriteLoading, newComment, userInfo } from './selectors';
import { AppState } from './app-slice/app-slice';
import { AuthorizationStatus, Cities } from '../const';
import { makeFakeInitState, makeFakeUserWithEmail, makeFakeOffer, makeFakeOffers, makeFakeOfferFull, makeFakeComments, makeFakeComment } from '../mock/mock';
import { UserState } from './user-slice/user-slice';
import { FavoriteState } from './favorite-slice/favorite-slice';
import { OfferState } from './offer-slice/offer-slice';
import { CommentState } from './comment-slice/comment-slice';

describe('Selectors', () => {
  const initialState = makeFakeInitState();

  describe('App slice', () => {
    const appState: AppState = {city: Cities['Hamburg'], sortType: 'top-rated'};
    const stubState = {...initialState, app: {...appState}};

    it('activeCity', () => {
      const result = activeCity(stubState);
      expect(result).toBe(appState.city);
    });

    it('activeSortType', () => {
      const result = activeSortType(stubState);
      expect(result).toBe(appState.sortType);
    });
  });

  describe('User slice', () => {
    const userState: UserState = { user: makeFakeUserWithEmail(), authorizationStatus: AuthorizationStatus.Auth };
    const stubState = {...initialState, user: {...userState}};

    it('userInfo', () => {
      const result = userInfo(stubState);
      expect(result).toEqual(userState.user);
    });

    it('authorizationStatus', () => {
      const result = authorizationStatus(stubState);
      expect(result).toEqual(userState.authorizationStatus);
    });
  });

  describe('Favorite slice', () => {
    const favoriteState: FavoriteState = {
      offer: { entity: makeFakeOffer(), status: 'done' },
      offers: { entity: makeFakeOffers(), status: 'done' }
    };
    const stubState = {...initialState, favorite: {...favoriteState}};

    it('allFavorites', () => {
      const { favorites, isLoading } = allFavorites(stubState);
      expect(favorites).toEqual(favoriteState.offers.entity);
      expect(isLoading).toEqual(favoriteState.offers.status === 'loading');
    });

    it('favoritesCount', () => {
      const result = favoritesCount(stubState);
      expect(result).toBe(favoriteState.offers.entity?.length);
    });

    it('isNewFavoriteLoading', () => {
      const result = isNewFavoriteLoading(stubState);
      expect(result).toEqual(favoriteState.offer.status === 'loading');
    });
  });

  describe('Offer slice', () => {
    const offerState: OfferState = {
      offer: { entity: makeFakeOfferFull(), status: 'done' },
      offers: { entity: makeFakeOffers(), status: 'done' },
      nearOffers: { entity: [], status: 'done' },
    };
    const stubState = {...initialState, offers: {...offerState}};

    it('allOffers', () => {
      const { offers, isLoading } = allOffers(stubState);
      expect(offers).toEqual(offerState.offers.entity);
      expect(isLoading).toEqual(offerState.offers.status === 'loading');
    });

    it('fullOffer', () => {
      const { isLoading, offer } = fullOffer(stubState);
      expect(offer).toEqual(offerState.offer.entity);
      expect(isLoading).toEqual(offerState.offer.status === 'loading');
    });

    it('allNearOffers', () => {
      const { isLoading, nearOffers } = allNearOffers(stubState);
      expect(nearOffers).toEqual(offerState.nearOffers.entity);
      expect(isLoading).toBe(offerState.nearOffers.status === 'loading');
    });
  });

  describe('Comment slice', () => {
    const commentState: CommentState = {
      comments: { entity: makeFakeComments(), status: 'done' },
      newComment: { entity: makeFakeComment(), status: 'done' },
    };
    const stubState = {...initialState, comment: {...commentState}};

    it('allComments', () => {
      const { comments, isLoading } = allComments(stubState);
      expect(comments).toEqual(commentState.comments.entity);
      expect(isLoading).toEqual(commentState.comments.status === 'loading');
    });

    it('newComment', () => {
      const { isPosting, isSuccess, comment } = newComment(stubState);
      expect(comment).toEqual(commentState.newComment.entity);
      expect(isPosting).toEqual(commentState.newComment.status === 'loading');
      expect(isSuccess).toEqual(commentState.newComment.status === 'done');
    });
  });
});
