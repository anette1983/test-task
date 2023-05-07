export const getStatusFilter = state => state.filter.status;
export const getTweets = state => state.tweets.items;
export const getIsLoading = state => state.tweets.isLoading;

export const getFollowings = state => {
  const tweets = getTweets(state);
  const followings = tweets.filter(tweet => tweet.following);
  const unfollowed = tweets.filter(tweet => !tweet.following);
  return { tweets, followings, unfollowed };
};

// только так получать фоловингс!

// export const selectUnfollowedTweets = state => {
//   const tweets = getTweets(state);

//   const followings = getFollowings(state);
//   const unfollowed = tweets.filter(tweet => !followings.includes(tweet));
//   return unfollowed;
// };
// export const getUnfollowed = state => state.tweets.unfollowed;

// написать селектор, который будет просто брать твиты с полем фоловинг
// поменять потом на селект, добавить гет тврист лоудинг, еррор

// export const selectUnfollowedTweets = state => {
//   const tweets = getTweets(state);
//   const followings = getFollowings(state);
//   const unfollowed = tweets.filter(
//     tweet => !followings.some(f => f.id === tweet.id)
//   );
//   return unfollowed;
// };
