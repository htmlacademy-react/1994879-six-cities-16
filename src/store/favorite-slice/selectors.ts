import { State } from '../../hooks';

export const getFavorites = (state: State) => state.favorite.offers;
