import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
// import css from './Task.module.css';
import { addFollower, deleteFollower, toggleFollowing } from 'redux/operations';
import {
  ActiveButton,
  Button,
  StyledAvatar,
  StyledAvatarWrap,
  StyledBottomDiv,
  StyledCard,
  StyledCardContent,
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
  // // на кнопке
  const isFollowing = tweet.following;

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledUpperDiv>
          <StyledLogo src={logo} alt="logo" width={76} />
        </StyledUpperDiv>
        <StyledAvatarWrap>
          <StyledAvatar src={tweet.avatar} alt={tweet.name} />
        </StyledAvatarWrap>
        <StyledBottomDiv>
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
                // dispatch(addToFollowings);
                // setFollowersNumber(tweet.followers);
              }}
            >
              Follow
            </Button>
          )}
        </StyledBottomDiv>
      </StyledCardContent>
    </StyledCard>
  );
};
