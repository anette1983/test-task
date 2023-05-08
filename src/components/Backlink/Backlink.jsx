import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  /* padding: 8px 0; */
  padding: 24px 8px;
  color: #373737;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    /* color: orangered; */
    color: #5736a3;

    /* linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%); */
  }
`;

const StyledArrow = styled(HiArrowNarrowLeft)`
  /* color: #373737; */
`;
export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowNarrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
