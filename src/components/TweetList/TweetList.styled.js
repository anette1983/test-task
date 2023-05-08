import styled from 'styled-components';

export const Container = styled.ul`
  padding: 24px;
  display: grid;

  grid-template-columns: repeat(auto-fill, 380px);
  gap: 16px;
`;

export const StyledWrapper = styled.div`
  padding: 0 0 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
