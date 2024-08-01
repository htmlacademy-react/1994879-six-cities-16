import { User } from './user';

export type CommentEntity = {
  comment: string;
  rating: number;
}

export type Comment = CommentEntity & {
  id: string;
  date: string;
  user: User;
}
