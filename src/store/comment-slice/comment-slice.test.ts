import { commentSlice } from './comment-slice';
import { Comment } from '../../types/comment';
import { FetchStatus } from '../type';
import { makeFakeComment, makeFakeComments } from '../../mock/mock';
import { CommentPost, fetchComments, postComment } from './thunk';

describe('commentSlice reducer', () => {
  const initialState = commentSlice.getInitialState();

  it('empty action test', () => {
    const action = { type: '' };

    const newState = commentSlice.reducer(initialState, action);

    expect(newState).toBe(initialState);
  });

  it('fetchComments pending', () => {
    const fetchStatus: FetchStatus = 'loading';

    const newState = commentSlice.reducer(initialState, fetchComments.pending);

    expect(newState.comments.status).toBe(fetchStatus);
  });

  it('fetchComments fulfilled', () => {
    const comments: Comment[] = makeFakeComments();
    const fetchStatus: FetchStatus = 'done';

    const newState = commentSlice.reducer(initialState, fetchComments.fulfilled(comments, '', '', undefined));

    expect(newState.comments.entity).toBe(comments);
    expect(newState.comments.status).toBe(fetchStatus);
  });

  it('fetchComments rejected', () => {
    const fetchStatus: FetchStatus = 'error';

    const newState = commentSlice.reducer(initialState, fetchComments.rejected);

    expect(newState.comments.status).toBe(fetchStatus);
  });

  it('postComment pending', () => {
    const fetchStatus: FetchStatus = 'loading';

    const newState = commentSlice.reducer(initialState, postComment.pending);

    expect(newState.newComment.status).toBe(fetchStatus);
  });

  it('postComment fulfilled', () => {
    const newComment: Comment = makeFakeComment();
    const mockPost: CommentPost = {
      offerId: '1',
      data: {
        comment: '123',
        rating: 3
      }
    };
    const fetchStatus: FetchStatus = 'done';

    const newState = commentSlice.reducer(initialState, postComment.fulfilled(newComment, '', mockPost, undefined));

    expect(newState.newComment.entity).toBe(newComment);
    expect(newState.comments.entity).toContainEqual(newComment);
    expect(newState.newComment.status).toBe(fetchStatus);
  });

  it('postComment rejected', () => {
    const fetchStatus: FetchStatus = 'error';

    const newState = commentSlice.reducer(initialState, postComment.rejected);

    expect(newState.newComment.status).toBe(fetchStatus);
  });
});
