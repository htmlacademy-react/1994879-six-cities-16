import { Offer } from '../../types/offer';
import { type OfferState } from './offer-slice';

const toggleFavorite = (offers: Offer[] | undefined, newOffer: Offer) => {
  const updateOffer = (offers || []).find((offer) => offer.id === newOffer.id);
  if (updateOffer) {
    updateOffer.isFavorite = newOffer.isFavorite;
  }
  return offers;
};

const toggleFavorites = (offers: Offer[] | undefined, favoritesId: string[]) =>
  (offers ?? []).map((offer) => ({ ...offer, isFavorite: favoritesId.includes(offer.id) }));


export const updateFavorites = (state: OfferState, newOffer: Offer) => {
  state.offers.entity = toggleFavorite(state.offers.entity, newOffer);
  state.nearOffers.entity = toggleFavorite(state.nearOffers.entity, newOffer);
  if (state.offer.entity && state.offer.entity.id === newOffer.id) {
    state.offer.entity.isFavorite = newOffer.isFavorite;
  }
};

export const updateOfferFavorites = (state: OfferState, favorites: Offer[]) => {
  const favoritesId = favorites.map(({ id }) => id);
  state.offers.entity = toggleFavorites(state.offers.entity, favoritesId);
  state.nearOffers.entity = toggleFavorites(state.nearOffers.entity, favoritesId);
  if (state.offer.entity) {
    state.offer.entity.isFavorite = favoritesId.includes(state.offer.entity.id);
  }
};
