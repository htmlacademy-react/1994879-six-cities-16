import { Comment } from '../../types/comment';

export const REVIEWS_LIMIT = 10;

export const sortComments = (commentA: Comment, commentB: Comment) =>
  commentB.date.getTime() - commentA.date.getTime();
