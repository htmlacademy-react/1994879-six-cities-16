import { createSlice } from '@reduxjs/toolkit';
import { fetchComments, postComment } from './thunk';
import { Comment } from '../../types/comment';
import { FetchState } from '../type';

export type CommentState = {
  comments: FetchState<Comment[]>;
  newComment: FetchState<Comment>;
}

const initialState: CommentState = {
  comments: { entity: [], status: 'none' },
  newComment: { entity: undefined, status: 'none' },
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.comments.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments.entity = action.payload;
        state.comments.status = 'done';
      })
      .addCase(fetchComments.rejected, (state) => {
        state.comments.status = 'error';
      })
      .addCase(postComment.pending, (state) => {
        state.newComment.status = 'loading';
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.newComment.entity = action.payload;
        state.comments.entity = [...(state.comments.entity ?? []), state.newComment.entity];
        state.newComment.status = 'done';
      })
      .addCase(postComment.rejected, (state) => {
        state.newComment.status = 'error';
      });
  }
});
