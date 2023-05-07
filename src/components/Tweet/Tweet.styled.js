import styled from 'styled-components';
import bg from '../../images/bg.png';

export const StyledCard = styled.li`
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  box-sizing: border-box;
  width: 380px;
  height: 460px;

  padding: 28px 36px 36px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.63);
    transform: scale(1.02);
  }
`;

export const StyledUpperDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: '';

    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;

    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const StyledLogo = styled.img`
  width: 76px;
`;

export const StyledImage = styled.img`
  align-self: center;
  width: 308px;
`;

export const StyledImgDiv = styled.div`
  width: 80px;
  height: 80px;
  object-fit: contain;
  overflow: hidden;

  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const StyledAvatar = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 8px solid transparent;
  box-sizing: border-box;
`;

export const StyledDownDiv = styled.div`
  text-align: center;
  padding-top: 62px;
`;

export const StyledPTweets = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const StyledPFollowers = styled.p`
  margin-bottom: 26px;

  color: #ebd8ff;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Button = styled.button`
  cursor: pointer;

  margin-top: 22px;
  padding: 10px 7px;
  width: 160px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;

  background-color: #ebd8ff;
  color: #373737;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;

export const ActiveButton = styled.button`
  cursor: pointer;

  margin-top: 22px;
  padding: 10px 7px;
  width: 160px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
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
