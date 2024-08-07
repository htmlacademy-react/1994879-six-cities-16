import { Offer } from '../../types/offer';
import { type InitialState } from './offer-slice';

export const updateFavorites = (state: InitialState, newOffer: Offer) => {
  const updateOffer = (state.offers.entity || []).find((offer) => offer.id === newOffer.id);
  if (updateOffer) {
    updateOffer.isFavorite = newOffer.isFavorite;
  }
  if (state.offer.entity && state.offer.entity.id === newOffer.id) {
    state.offer.entity.isFavorite = newOffer.isFavorite;
  }
};

export const updateOfferFavorites = (state: InitialState, favorites: Offer[]) => {
  const favoritesId = favorites.map(({ id }) => id);
  state.offers.entity = (state.offers.entity ?? [])
    .map((offer) => ({ ...offer, isFavorite: favoritesId.includes(offer.id) }));
  if (state.offer.entity) {
    state.offer.entity.isFavorite = favoritesId.includes(state.offer.entity.id);
  }
};
