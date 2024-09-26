import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PINK};
  height: 4rem; 
  border: 0;
  padding:  2.6rem;
  
  border-radius: 1rem;
  font-size: 3rem; 
  font-weight: 500;
  font-family: "Playfair Display", sans-serif;


  &:disabled {
    opacity: 0.5;
    background-color: #FF69B4

  }

  @media (max-width: 768px) {
    font-size: 2rem; 
  }
`;
