import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api';
import { CommentPost, fetchComments, postComment } from './thunk';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes } from '../../mock/mock-component';
import { State } from '../../hooks';
import { makeFakeComment, makeFakeInitState } from '../../mock/mock';
import { Endpoint } from '../../const';
import { Comment } from '../../types/comment';

describe('Comment thunk', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;
  const offerId = '123';
  const commentPost: CommentPost = {
    offerId: offerId,
    data: {
      rating: 4,
      comment: 'some text',
    }
  };
  const commentResult: Comment = {...makeFakeComment(),
    rating: commentPost.data.rating,
    comment: commentPost.data.comment
  };

  beforeEach(() => {
    store = mockStoreCreator(makeFakeInitState());
  });

  it('fetch comments for an offer', async () => {
    mockAxiosAdapter.onGet(`${Endpoint.Comments}/${offerId}`).reply(200);

    await store.dispatch(fetchComments(offerId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchComments.pending.type,
      fetchComments.fulfilled.type,
    ]);
  });

  it('reject comments for not found offer', async () => {
    mockAxiosAdapter.onGet(`${Endpoint.Comments}/${offerId}`).reply(404);

    await store.dispatch(fetchComments(offerId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchComments.pending.type,
      fetchComments.rejected.type,
    ]);
  });

  it('post comments', async () => {
    mockAxiosAdapter.onPost(`${Endpoint.Comments}/${offerId}`).reply(201, commentResult);

    const response = await store.dispatch(postComment(commentPost));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      postComment.pending.type,
      postComment.fulfilled.type,
    ]);
    expect(response.payload).toEqual(commentResult);
  });

  it('post comments with reject', async () => {
    mockAxiosAdapter.onPost(`${Endpoint.Comments}/${offerId}`).reply(404, {
      errorType: 'COMMON_ERROR',
      message: `Offer with id ${offerId} not found.`
    });

    await store.dispatch(postComment(commentPost));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      postComment.pending.type,
      postComment.rejected.type,
    ]);
  });
});
