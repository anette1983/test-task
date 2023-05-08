import styled from 'styled-components';
import bg from '../../images/bg.png';

export const StyledCard = styled.li`
  box-sizing: border-box;
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.43);
    transform: scale(1.03);
  }
  &::after {
    display: block;
    position: absolute;
    top: 214px;
    content: '';
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const StyledCardContent = styled.div`
  padding: 28px 36px 36px;
`;

export const StyledUpperDiv = styled.div`
  background-image: url(${bg});

  background-position: center;
  background-repeat: no-repeat;

  height: 168px;
  width: 308px;
`;

export const StyledLogo = styled.img`
  /* width: 76px; */
  position: absolute;

  top: 20px;
  left: 20px;
`;

export const StyledAvatarWrap = styled.div`
  position: absolute;
  z-index: 2;
  top: 178px;
  left: 50%;

  height: 80px;
  width: 80px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  object-fit: contain;
  overflow: hidden;
`;

export const StyledAvatar = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 8px solid transparent;
  box-sizing: border-box;
`;
// Можливо, це не потрібно

export const StyledBottomDiv = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 36px;
`;

export const StyledPTweets = styled.div`
  margin-bottom: 16px;
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const StyledPFollowers = styled.div`
  margin-bottom: 26px;
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  cursor: pointer;
  background-color: #ebd8ff;
  border: none;

  border-radius: 10px;

  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;

export const ActiveButton = styled.button`
  cursor: pointer;
  display: block;
  width: 196px;
  height: 50px;
  cursor: pointer;

  border: none;

  border-radius: 10px;

  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;

  background-color: #5cd3a8;
  color: #373737;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ebd8ff;
  }
`;
