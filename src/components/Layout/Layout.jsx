import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import styled from 'styled-components';
import { StyledContainer, StyledHeader, StyledNavLink } from './Layout.styled';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <StyledHeader>
        <nav>
          <ul>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              {/* <StyledNavLink to="/tweets" state={{ from: '/' }}> */}
              <StyledNavLink to="/tweets" state={{ from: location }}>
                Tweets
              </StyledNavLink>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <StyledContainer>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer></footer>
      </StyledContainer>
    </>
  );
};

export default Layout;
