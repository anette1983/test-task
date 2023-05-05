import { useDispatch, useSelector } from 'react-redux';
import {
  getTweets,
  getStatusFilter,
  getFollowings,
  selectUnfollowedTweets,
} from 'redux/selectors';
import { statusFilters } from 'redux/constants';
// import css from './TaskList.module.css';
import { Tweet } from 'components/Tweet/Tweet';
import { useEffect } from 'react';
import { fetchTweets } from 'redux/operations';

// перенести в селекторы
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;

const getVisibleTweets = (tweets, following, unfollowed, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      // return tweets.filter(tweet => !tweet.following);
      return unfollowed;
    case statusFilters.following:
      // return tweets.filter(tweet => tweet.following);
      return following;
    default:
      return tweets;
  }
};
// эту фкцию мемоизировать, весь лист

export const TweetList = () => {
  const followings = useSelector(getFollowings);

  const tweets = useSelector(getTweets);

  const unfollowed = useSelector(selectUnfollowedTweets);

  console.log('tweets :>> ', tweets);
  const statusFilter = useSelector(getStatusFilter);
  console.log('statusFuilter :>> ', statusFilter);
  const visibleTweets = getVisibleTweets(
    tweets,
    followings,
    unfollowed,
    statusFilter
  );
  console.log('visibleTweets :>> ', visibleTweets);

  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  console.log('visibleTweets :>> ', visibleTweets);

  return (
    <ul
    // className={css.list}
    >
      {visibleTweets.map(tweet => (
        <li
          // className={css.listItem}
          key={tweet.id}
        >
          <Tweet tweet={tweet} />
        </li>
      ))}
    </ul>
  );
};
