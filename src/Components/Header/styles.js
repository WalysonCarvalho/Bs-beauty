import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-bottom: 2px solid #a7007b;
  font-family: "Roboto Slab", sans-serif;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
    }

    button {
      padding: 0.8rem 1.6rem;
      background-color: #ff69b4;
      border: none;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-size: 2rem;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: #ff85b9;
      }

      &.active {
        animation: wipe-out-down 2.5s cubic-bezier(0.25, 0.5, 0.2, 0.5) both;
      }
    }
  }

  &:disabled {
    opacity: 0.5;
  }

  @keyframes wipe-out-down {
    from {
      clip-path: inset(0 0 0 0);
    }
    to {
      clip-path: inset(100% 0 0 0);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 1rem 0 1rem;
    border: none;
    margin-bottom: 1rem;
  }
`;
