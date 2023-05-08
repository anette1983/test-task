import { ActiveButton } from 'components/Tweet/Tweet.styled';
import styled from 'styled-components';

export const StyledSection = styled.div`
  padding-top: 24px;
`;

export const StyledHeader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 68px;
    color: #471ca9;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const StyledHPActiveBtn = styled(ActiveButton)`
  margin: 0 auto;
`;
