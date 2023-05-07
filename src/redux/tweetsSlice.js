import { createSlice } from '@reduxjs/toolkit';
import {
  addFollower,
  deleteFollower,
  fetchTweets,
  toggleFollowing,
} from './operations';

import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handlePending,
  handleRejected,
  handleToggleFullfilled,
} from '../services/apiFetchHandlers.js';

const tweetsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  // following: false,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: tweetsInitialState,
  reducers: {
    // addToFollowings: (state, action) => {
    //   state.followings.push(action.payload);
    //   const index = state.unfollowed.findIndex(
    //     tweet => tweet.id === action.payload
    //   );
    //   state.unfollowed.splice(index, 1);
    //   state.items.splice(index, 1);
    // },
    // deleteFromFollowings: (state, action) => {
    //   const index = state.followings.findIndex(
    //     tweet => tweet.id === action.payload
    //   );
    //   state.followings.splice(index, 1);
    //   state.unfollowed.push(action.payload);
    //   state.items.push(action.payload);
    // },
    // toggleFollowing: (state, action) => {
    //   for (const item of state.items) {
    //     if (item.id === action.payload) {
    //       item.following = !item.following;
    //       if (item.following) {
    //         state.followings.push(item);
    //       } else {
    //         const index = state.followings.findIndex(
    //           following => following.id === item.id
    //         );
    //         state.followings.splice(index, 1);
    //         // if (index !== -1) {
    //         //   state.followings.splice(index, 1);
    //         // }
    //       }
    //       break;
    //     }
    //   }
    // },
  },
  //  это работает

  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, handleFulfilled)
      .addCase(fetchTweets.pending, handlePending)
      .addCase(fetchTweets.rejected, handleRejected)
      .addCase(toggleFollowing.fulfilled, handleToggleFullfilled)
      .addCase(addFollower.fulfilled, handleFulfilledAdd)
      .addCase(deleteFollower.fulfilled, handleFulfilledDelete);
  },
});

export const { addToFollowings, deleteFromFollowings } = tweetsSlice.actions;
export default tweetsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { addFollower, deleteFollower, fetchTweets } from './operations';

// import {
//   handleFulfilled,
//   handleFulfilledAdd,
//   handleFulfilledDelete,
//   handlePending,
//   handleRejected,
// } from '../services/apiFetchHandlers.js';

// const tweetsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
//   following: false,
//   followings: [],
//   unfollowed: [],
// };

// const tweetsSlice = createSlice({
//   name: 'tweets',
//   initialState: tweetsInitialState,
//   reducers: {
//     // toggleFollowing: (state, action) => {
//     //   const index = state.items.findIndex(
//     //     tweet => tweet.id === action.payload.id
//     //   );
//     //   state.items.splice(index, 1, action.payload);
//     // },
//     toggleFollowing: (state, action) => {
//       for (const item of state.items) {
//         if (item.id === action.payload) {
//           item.following = !item.following;
//           if (item.following) {
//             state.followings.push(item);
//             const index = state.unfollowed.findIndex(
//               following => following.id === item.id
//             );
//             if (index !== -1) {
//               state.unfollowed.splice(index, 1);
//             }
//           } else {
//             const index = state.followings.findIndex(
//               following => following.id === item.id
//             );
//             if (index !== -1) {
//               state.followings.splice(index, 1);
//               state.unfollowed.push(item);
//             }
//           }
//           break;
//         }
//       }
//     },
//     // toggleFollowing: (state, action) => {
//     //   const { payload: tweetId } = action;
//     //   const index = state.items.findIndex(tweet => tweet.id === tweetId);
//     //   if (index >= 0) {
//     //     const item = state.items[index];
//     //     const following = !item.following;
//     //     state.items[index] = { ...item, following };
//     //     if (following) {
//     //       state.followings.push(item);
//     //     } else {
//     //       const followingIndex = state.followings.findIndex(
//     //         following => following.id === tweetId
//     //       );
//     //       if (followingIndex >= 0) {
//     //         state.followings.splice(followingIndex, 1);
//     //       }
//     //     }
//     //   }
//     // },
//   },
//   //  этоь самый приличный

//   extraReducers: builder => {
//     builder
//       .addCase(fetchTweets.fulfilled, handleFulfilled)
//       .addCase(fetchTweets.pending, handlePending)
//       .addCase(fetchTweets.rejected, handleRejected)
//       .addCase(addFollower.fulfilled, handleFulfilledAdd)
//       .addCase(deleteFollower.fulfilled, handleFulfilledDelete);
//     // додати редагування по айді, щоб міняти кількість фоловерів
//     // можливо, все ж додати строку фоловінг на беку
//   },
// });

// export const { toggleFollowing } = tweetsSlice.actions;
// export default tweetsSlice.reducer;
