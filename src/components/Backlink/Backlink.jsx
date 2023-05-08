import { HiArrowNarrowLeft } from 'react-icons/hi';
import { StyledLink } from './Backlink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowNarrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
