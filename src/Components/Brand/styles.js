import styled from 'styled-components'


export const Container = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;

  font-size: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: "Roboto Slab", sans-serif;
  border-bottom: 2px solid #a7007b;
  color: ${({ theme }) => theme.COLORS.PINK};

  


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

