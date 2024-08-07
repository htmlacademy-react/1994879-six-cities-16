import { Comment } from '../../types/comment';

export const REVIEWS_LIMIT = 10;

export const sortComments = (commentA: Comment, commentB: Comment) =>
  new Date(commentB.date).getTime() - new Date(commentA.date).getTime();
