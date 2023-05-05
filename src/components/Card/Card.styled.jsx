import styled from 'styled-components';
import bg from '../../images/bg.png';

export const StyledLi = styled.li`
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const StyledDiv = styled.div`
  padding: 28px 36px 18px;
  background-image: url(${bg});
  height: 168px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledDividerDiv = styled.div`
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin-bottom: 62px;
`;

export const StyledBottomDiv = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  button {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    /* Landing/button text color */

    color: #373737;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    /* margin: 0;
    padding: 0; */
    padding: 14px 56px;

    cursor: pointer;
    border: none;
    outline: none;
  }
`;
