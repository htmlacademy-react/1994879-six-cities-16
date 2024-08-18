import { RATING_STEP } from './const';

const mapToRange = (input: number) => Math.min(5, Math.max(1, input));
export const ratingToPercent = (rating: number): string => `${Math.round(mapToRange(rating)) * RATING_STEP}%`;
