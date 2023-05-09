import { createSlice } from '@reduxjs/toolkit';
import {
  addFollower,
  deleteFollower,
  fetchTweets,
  fetchTweetsByPage,
} from './operations';

import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handlePending,
  handleRejected,
} from '../services/apiFetchHandlers.js';

const tweetsInitialState = {
  items: [],
  limit: 3,
  isLoading: false,
  error: null,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: tweetsInitialState,
  reducers: {
    changeLimit: (state, action) => {
      state.limit += action.payload;
    },
    deleteLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, handleFulfilled)
      .addCase(fetchTweets.pending, handlePending)
      .addCase(fetchTweets.rejected, handleRejected)
      .addCase(fetchTweetsByPage.pending, handlePending)
      .addCase(fetchTweetsByPage.fulfilled, handleFulfilled)
      .addCase(fetchTweetsByPage.rejected, handleRejected)
      .addCase(addFollower.fulfilled, handleFulfilledAdd)
      .addCase(addFollower.pending, handlePending)
      .addCase(addFollower.rejected, handleRejected)
      .addCase(deleteFollower.fulfilled, handleFulfilledDelete)
      .addCase(deleteFollower.pending, handlePending)
      .addCase(deleteFollower.rejected, handleRejected);
  },
});

export const { changeLimit, deleteLimit } = tweetsSlice.actions;

export default tweetsSlice.reducer;
