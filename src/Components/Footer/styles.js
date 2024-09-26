import styled from "styled-components";

export const Container = styled.footer`
  grid-column: 1/4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 2.5rem;
  padding: 1rem;
  min-height: 10vh;
  margin-top: auto; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
  }

  span {
    font-size: 2rem;
  }

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    grid-column: 1/4;
    width: 100%;
    flex-direction: column;
    font-size: 1.8rem;
  }
`;
