export const getStatusFilter = state => state.filter.status;
export const getTweets = state => state.tweets.items;
export const getFollowings = state => state.tweets.followings;

export const selectUnfollowedTweets = state => {
  const tweets = getTweets(state);
  const followings = getFollowings(state);
  const unfollowed = tweets.filter(tweet => !followings.includes(tweet));
  return unfollowed;
};
// поменять потом на селект, добавить гет тврист лоудинг, еррор
