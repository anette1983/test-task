import { useDispatch, useSelector } from 'react-redux';
import {
  getStatusFilter,
  getFollowings,
  getIsLoading,
  getLimit,
} from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import { Tweet } from 'components/Tweet/Tweet';
import { useEffect } from 'react';
import { fetchTweetsByPage } from 'redux/operations';
import { Container, StyledWrapper } from './TweetList.styled';
import { Button } from 'components/Tweet/Tweet.styled';
import Loader from 'components/Loader/Loader';
import { changeLimit } from 'redux/tweetsSlice';

const getVisibleTweets = (tweets, following, unfollowed, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return unfollowed;
    case statusFilters.following:
      return following;
    default:
      return tweets;
  }
};

export const TweetList = () => {
  const { followings, tweets, unfollowed } = useSelector(getFollowings);
  const isLoading = useSelector(getIsLoading);
  const limit = useSelector(getLimit);

  const statusFilter = useSelector(getStatusFilter);

  const visibleTweets = getVisibleTweets(
    tweets,
    followings,
    unfollowed,
    statusFilter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweetsByPage(limit));
  }, [dispatch, limit]);

  const handleLoadMoreClick = () => {
    dispatch(fetchTweetsByPage(limit));
    dispatch(changeLimit(3));
  };

  const shouldShow = followings.length + unfollowed.length !== 12;

  return (
    <>
      <Container>
        {visibleTweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </Container>
      <StyledWrapper>
        {shouldShow && !isLoading && (
          <Button onClick={handleLoadMoreClick}>Load more</Button>
        )}
        {isLoading && <Loader />}
      </StyledWrapper>
    </>
  );
};
