import { StyledHPActiveBtn, StyledHeader, StyledSection } from './Home.styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledSection>
      <StyledHeader>
        <h1>Welcome to the tweets app!</h1>
        <StyledHPActiveBtn
          onClick={() => {
            navigate('/tweets');
          }}
        >
          To the tweets
        </StyledHPActiveBtn>
      </StyledHeader>
    </StyledSection>
  );
};

export default Home;
