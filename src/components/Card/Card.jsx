import logo from '../../images/Logo.png';
import {
  StyledBottomDiv,
  StyledDiv,
  StyledDividerDiv,
  StyledLi,
} from './Card.styled';

export const Card = () => {
  return (
    <StyledLi>
      {/* <span>
        <img src={logo} alt="" width="76px" height="22px" />
      </span> */}
      <StyledDiv />
      {/* bg img */}
      <div>
        {/* тут будет аватар и полоска
                  полоска возможно див с высотой? а аватар - позиц жэлемент */}
        <span>{/* <img src={} alt={} /> */}</span>
        <StyledDividerDiv></StyledDividerDiv>
      </div>
      <StyledBottomDiv>
        <p>{}TWEETS</p>
        <p>{}FOLLOWERS</p>
        <button type="button">FOLLOW/FOLLOWED</button>
      </StyledBottomDiv>
    </StyledLi>
  );
};
