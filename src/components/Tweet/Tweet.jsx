import { useDispatch } from 'react-redux';
import { addFollower, deleteFollower } from 'redux/operations';
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
import { formatNumber } from 'services/formatHandlers';

export const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();

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
                dispatch(deleteFollower(tweet));
              }}
            >
              Following
            </ActiveButton>
          ) : (
            <Button
              type="button"
              onClick={() => {
                dispatch(addFollower(tweet));
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
