import { RATING_STEP } from './const';

export const ratingToPercent = (rating: number): string => `${Math.round(rating) * RATING_STEP}%`;
