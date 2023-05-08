import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
// import css from './Task.module.css';
import { addFollower, deleteFollower } from 'redux/operations';
import {
  ActiveButton,
  Button,
  StyledAvatar,
  StyledCard,
  StyledDownDiv,
  StyledImage,
  StyledImgDiv,
  StyledLogo,
  StyledPFollowers,
  StyledPTweets,
  StyledUpperDiv,
} from './Tweet.styled';
import logo from '../../images/logo.png';
import img from '../../images/bg.png';
import { formatNumber } from 'services/formatHandlers';
import { useEffect, useState } from 'react';
import { addToFollowings, deleteFromFollowings } from 'redux/tweetsSlice';

export const Tweet = ({ tweet }) => {
  // const [followersNumber, setFollowersNumber] = useState(tweet.followers);
  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [followersNumber])

  // const handleToggle = () => {
  //   dispatch(toggleFollowing(tweet));
  // };
  // на кнопке
  const isFollowing = tweet.following;
  console.log('object :>> ', isFollowing);

  return (
    <StyledCard>
      <StyledUpperDiv>
        <StyledLogo src={logo} alt="logo" />
        {/* <StyledImage src={img} alt="background picture" /> */}
      </StyledUpperDiv>
      <StyledDownDiv>
        <StyledImgDiv>
          <StyledAvatar src={tweet.avatar} alt={tweet.name} />
        </StyledImgDiv>
        <StyledPTweets>{formatNumber(tweet.tweets)} tweets</StyledPTweets>
        <StyledPFollowers>
          {formatNumber(tweet.followers)} followers
        </StyledPFollowers>
        {isFollowing ? (
          <ActiveButton
            type="button"
            onClick={() => {
              // handleToggle();
              dispatch(deleteFollower(tweet));
              // dispatch(addFollower((tweet.followers -= 1)));
              // setFollowersNumber(tweet.followers);
              // dispatch(deleteFromFollowings);
              // в цьому місці змінювати на беку кількість фоловерів
            }}
          >
            Following
          </ActiveButton>
        ) : (
          <Button
            type="button"
            onClick={() => {
              // handleToggle();

              dispatch(addFollower(tweet));
              // dispatch(addFollower((tweet.followers += 1)));
              // dispatch(addToFollowings);
              // setFollowersNumber(tweet.followers);
            }}
          >
            Follow
          </Button>
        )}
      </StyledDownDiv>
    </StyledCard>
  );
};
