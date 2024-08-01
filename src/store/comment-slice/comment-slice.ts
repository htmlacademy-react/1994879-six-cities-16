import { createSlice } from '@reduxjs/toolkit';
import { fetchComments, postComment } from './thunk';
import { Comment } from '../../types/comment';
import { StateLoading } from '../type';

type InitialState = {
  comments: StateLoading<Comment[]>;
  newComment: StateLoading<Comment>;
}

const initialState: InitialState = {
  comments: { value: [], loading: false },
  newComment: { value: undefined, loading: false },
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.comments.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments.value = action.payload;
        state.comments.loading = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.comments.loading = false;
      })
      .addCase(postComment.pending, (state) => {
        state.newComment.loading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.newComment.value = action.payload;
        state.newComment.loading = false;
      })
      .addCase(postComment.rejected, (state) => {
        state.newComment.loading = false;
      });
  }
});
