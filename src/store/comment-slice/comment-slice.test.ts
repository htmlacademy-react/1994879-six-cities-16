import { commentSlice } from './comment-slice';
import { Comment } from '../../types/comment';
import { FetchStatus } from '../type';

describe('commentSlice reducer', () => {
  it('fetchComments pending', () => {
    const initialState = commentSlice.getInitialState();
    const action = { type: 'comment/fetchComments/pending' };
    const fetchStatus: FetchStatus = 'loading';

    const newState = commentSlice.reducer(initialState, action);

    expect(newState.comments.status).toBe(fetchStatus);
  });

  it('fetchComments fulfilled', () => {
    const initialState = commentSlice.getInitialState();
    const comments: Comment[] = [{ id: 1, text: 'Comment 1' }];
    const action = { type: 'comment/fetchComments/fulfilled', payload: comments };
    const fetchStatus: FetchStatus = 'done';

    const newState = commentSlice.reducer(initialState, action);

    expect(newState.comments.entity).toBe(comments);
    expect(newState.comments.status).toBe(fetchStatus);
  });

  it('fetchComments rejected', () => {
    const initialState = commentSlice.getInitialState();
    const action = { type: 'comment/fetchComments/rejected' };
    const fetchStatus: FetchStatus = 'error';

    const newState = commentSlice.reducer(initialState, action);

    expect(newState.comments.status).toBe(fetchStatus);
  });

  it('postComment pending', () => {
    const initialState = commentSlice.getInitialState();
    const action = { type: 'comment/postComment/pending' };
    const fetchStatus: FetchStatus = 'loading';

    const newState = commentSlice.reducer(initialState, action);

    expect(newState.newComment.status).toBe(fetchStatus);
  });

  it('postComment fulfilled', () => {
    const initialState = commentSlice.getInitialState();
    const newComment: Comment = { id: 1, comment: 'New Comment', raiting: 4 };
    const action = { type: 'comment/postComment/fulfilled', payload: newComment };
    const fetchStatus: FetchStatus = 'done';

    const newState = commentSlice.reducer(initialState, action);

    expect(newState.newComment.entity).toBe(newComment);
    expect(newState.comments.entity).toContainEqual(newComment);
    expect(newState.newComment.status).toBe(fetchStatus);
  });

  it('postComment rejected', () => {
    const initialState = commentSlice.getInitialState();
    const action = { type: 'comment/postComment/rejected' };
    const fetchStatus: FetchStatus = 'error';

    const newState = commentSlice.reducer(initialState, action);

    expect(newState.newComment.status).toBe(fetchStatus);
  });
});
