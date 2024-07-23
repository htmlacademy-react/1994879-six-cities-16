export const DEFAULT_RATING = 0;

export const Ratings = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

export type Range = {
  min: number;
  max: number;
}

export const RatingLimit: Range = {
  min: 1,
  max: 5
};

export const CommentLimit: Range = {
  min: 50,
  max: 300
};
