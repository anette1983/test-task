import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets } from './operations';

import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../services/apiFetchHandlers.js';

const tweetsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  following: false,
  followings: [],
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: tweetsInitialState,
  reducers: {
    toggleFollowing: (state, action) => {
      for (const item of state.items) {
        if (item.id === action.payload) {
          item.following = !item.following;
          if (item.following) {
            state.followings.push(item);
          } else {
            const index = state.followings.findIndex(
              following => following.id === item.id
            );
            state.followings.splice(index, 1);
            // if (index !== -1) {
            //   state.followings.splice(index, 1);
            // }
          }
          break;
        }
      }
    },
  },
  //  это работает

  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, handleFulfilled)
      .addCase(fetchTweets.pending, handlePending)
      .addCase(fetchTweets.rejected, handleRejected);
  },
});

export const { toggleFollowing } = tweetsSlice.actions;
export default tweetsSlice.reducer;
