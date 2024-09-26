import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh; 
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: auto auto auto; 
  grid-template-areas:
    "brand header"
    "menu menu"
    "footer footer";
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    padding: 1rem 0;
  }
`;

export const Brand = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;

 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 6rem;
  font-family: "Roboto Slab", sans-serif;

  border-bottom: 2px solid #a7007b;
  background: ${({ theme }) => theme.COLORS.PINK};

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

export const Header = styled.header`
  grid-column: 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-bottom: 2px solid #a7007b;
  font-family: "Roboto Slab", sans-serif;
  background: ${({ theme }) => theme.COLORS.PINK};

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
      background-color: #a7007b;
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
        animation: wipe-out-down 2.5s cubic-bezier(0.25, 0.5, 0.20, 0.5) both;
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
    border: none;
    margin-bottom: 1rem;
  }
`;

export const Menu = styled.div`
  grid-column: 1 / 4;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div .title {
    font-size: 4rem;
    font-family: "Playfair Display", sans-serif;
    color: ${({ theme }) => theme.COLORS.PINK};
    position: relative;

    padding-bottom: 2rem;
    margin: 4rem;

    display: flex;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
  }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      
    }
  }

  >.container_button {
    display: flex;
    gap: 3rem;

    > button {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .procedure-image {
    display: flex;
    gap: 6rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .procedure-image {
      flex-direction: column;
      gap: 1rem; 
    }
  }

  .procedure-image img {
    width: 30rem;
    height: 50rem;
    max-width: 600px;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    opacity: ${({ fade }) => (fade ? 0 : 1)};
    transform: scale(${({ fade }) => (fade ? 0.2 : 1)});
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  > .benefits {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10rem;
    font-size: 5rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    font-family: "Roboto Slab", sans-serif;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .benefits ul {
    columns: 2;
    list-style-type: none;
  }

  .benefits ul li:before {
    content: "✓ ";
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
  }

  .cta-button {
    display: inline-block;
    background-color: #ff1493;
    color: white;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
