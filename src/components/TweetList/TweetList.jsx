import { useDispatch, useSelector } from 'react-redux';
import {
  getTweets,
  getStatusFilter,
  getFollowings,
  getUnfollowed,
  getIsLoading,
} from 'redux/selectors';
import { statusFilters } from 'redux/constants';
// import css from './TaskList.module.css';
import { Tweet } from 'components/Tweet/Tweet';
import { useEffect } from 'react';
import { fetchTweets, fetchTweetsByPage } from 'redux/operations';
import { useState } from 'react';
import { Container, StyledWrapper } from './TweetList.styled';
import { Button } from 'components/Tweet/Tweet.styled';
import Loader from 'components/Loader/Loader';

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
  const [limit, setLimit] = useState(3);
  const { followings, tweets, unfollowed } = useSelector(getFollowings);
  const isLoading = useSelector(getIsLoading);

  const statusFilter = useSelector(getStatusFilter);

  const visibleTweets = getVisibleTweets(
    tweets,
    followings,
    unfollowed,
    statusFilter
  );

  const dispatch = useDispatch();

  const maxTweets = 12;

  useEffect(() => {
    dispatch(fetchTweetsByPage(limit));
  }, [dispatch, limit]);

  const handleLoadMoreClick = () => {
    setLimit(prevLimit => prevLimit + 3);
    dispatch(fetchTweetsByPage(limit));
  };

  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTweets());
  // }, [dispatch]);

  console.log(
    'tweets, following, unfollowed, visibleTweets :>> ',
    tweets,
    followings,
    unfollowed,
    visibleTweets
  );

  return (
    <>
      <Container
      // className={css.list}
      >
        {visibleTweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </Container>
      <StyledWrapper>
        {(visibleTweets.length < maxTweets || visibleTweets.length <= 3) &&
          !isLoading && (
            <Button onClick={handleLoadMoreClick}>Load more</Button>
          )}
        {isLoading && <Loader />}
      </StyledWrapper>
    </>
  );
};

// import { useDispatch, useSelector } from 'react-redux';

// import {
//   getTweets,
//   getStatusFilter,
//   getFollowings,
//   selectUnfollowedTweets,
//   getUnfollowed,
// } from 'redux/selectors';
// import { statusFilters } from 'redux/constants';
// // import css from './TaskList.module.css';
// import { Tweet } from 'components/Tweet/Tweet';
// import { useEffect, useState } from 'react';
// import { fetchTweets } from 'redux/operations';
// import { Container } from './TweetList.styled';

// // перенести в селекторы
// export const selectIsLoading = state => state.tweets.isLoading;
// export const selectError = state => state.tweets.error;

// const getVisibleTweets = (tweets, followings, unfollowed, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.follow:
//       // return tweets.filter(tweet => !tweet.following);
//       return unfollowed;
//     case statusFilters.following:
//       // return tweets.filter(tweet => tweet.following);
//       return followings;
//     default:
//       return tweets;
//   }
// };

// // // сделать так:
// // const filterCheck = async () => {
// //   switch (filter) {
// //     case 'show all': {
// //       const result = await fetchAll(page + 1);
// //       return result;
// //     }
// //     case 'follow': {
// //       const result = await fetchNotFollowed(page + 1);
// //       return result;
// //     }
// //     case 'followings': {
// //       const result = await fetchFollowed(page + 1);
// //       return result;
// //     }
// //     default:
// //       return;
// //   }
// // };

// // эту фкцию мемоизировать, весь лист
// // export const getVisibleTweets = state => {
// //   const { items, filter, followings } = state.tweets;
// //   if (filter === 'all') {
// //     return items;
// //   } else if (filter === 'follow') {
// //     return items.filter(tweet => tweet.following);
// //   } else if (filter === 'following') {
// //     return items.filter(tweet => followings.includes(tweet.id)); // filter by followingTweetIds
// //   }
// // };

// export const TweetList = () => {
//   // const [photos, setPhotos] = useState([]);
//   const [page, setPage] = useState(1);
//   const followings = useSelector(getFollowings);

//   const tweets = useSelector(getTweets);

//   const unfollowed = useSelector(getUnfollowed);

//   const statusFilter = useSelector(getStatusFilter);
//   console.log('statusFuilter :>> ', statusFilter);

//   const visibleTweets = getVisibleTweets(
//     tweets,
//     followings,
//     unfollowed,
//     statusFilter
//   );

//   //  const isLoading = useSelector(selectIsLoading);
//   //  const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTweets(page));
//   }, [dispatch, page]);

//   const handleLoadMoreClick = () => {
//     setPage(prevPage => prevPage + 1);
//     dispatch(fetchTweets(page));
//   };

//   // if (followings.length > 0) {
//   //   const followingTweets = visibleTweets.map(tweet => {
//   //     const matchingObj = followings.find(obj => obj.id === tweet.id);
//   //     if (matchingObj) {
//   //       return {
//   //         ...tweet,
//   //         following: true,
//   //       };
//   //     } else {
//   //       return tweet;
//   //     }
//   //   });

//   return (
//     <>
//       <Container
//       // className={css.list}
//       >
//         {visibleTweets.map(tweet => (
//           <Tweet key={tweet.id} tweet={tweet} />
//         ))}
//       </Container>
//       <button onClick={handleLoadMoreClick}>LoadMore</button>
//     </>
//   );
// };
