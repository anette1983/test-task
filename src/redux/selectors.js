export const getStatusFilter = state => state.filter.status;
export const getTweets = state => state.tweets.items;
export const getIsLoading = state => state.tweets.isLoading;


export const getFollowings = state => {
  const tweets = getTweets(state);
  const followings = tweets.filter(tweet => tweet.following);
  const unfollowed = tweets.filter(tweet => !tweet.following);
  return { tweets, followings, unfollowed };
};

export const getModifiedTweets = state => {
  const tweets = getTweets(state);
  const modifiedTweets = tweets.map(tweet => ({ ...tweet, following: false }));
  return modifiedTweets;
};
