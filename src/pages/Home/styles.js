import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden; 
  display: grid;
  min-height: 100vh;
  box-sizing: border-box; 
  grid-template-columns: minmax(0, 25rem) 1fr;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "brand header"
    "menu menu"
    "content content"
    "div div"
    "footer footer";

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;
export const Brand = styled.div`
  grid-column: 1/2;

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

export const Menu = styled.div`
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 2px solid #a7007b;
  padding: 2rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-family: "Playfair Display", sans-serif;
    font-size: 4.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 4rem;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      height: 3px;
      background-color: #666;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-weight: 300;

    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 1rem;
    gap: 1rem;
  }
`;

export const Content = styled.div`
  grid-column: 1/4;
  background: ${({ theme }) => theme.COLORS.VIOLET_100};
  height: 100vh;

  font-family: "Roboto Slab", sans-serif;
  padding: 2rem;
  font-size: 7rem;

  > div {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    width: 100%;
    gap: 2rem;

    &:nth-child(1) {
      text-align: center;
      font-size: 6rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 5rem 0;
    }

    &:nth-child(2) {
      
      justify-content: space-around;
      align-items: center;
    }

    .image-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;

      img {
        overflow: hidden;
        width: 350px;
        height: 465px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
        transition:
          transform 0.5s ease,
          border-radius 0.5s ease;

        &:hover {
          transform: scale(1.05);
          border-radius: 10px 10px 10px 10px;
        }
      }

      span {
        color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 2rem;
        font-family: "Roboto Slab", sans-serif;
        background: white;
        width: 350px;
        height: 8rem;
        border-radius: 0 0 10px 10px;
        margin-bottom:5rem ;
      }
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px) scale(1.02);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @media (max-width: 768px) {
    padding: 1.6rem;


    &:nth-child(1) {
      flex-direction: row;
      text-align: center;
      font-size: 6rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 5rem 0;
    }


    

    img {
      width: 150px;
      height: 165px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
      transition:
        transform 0.5s ease,
        border-radius 0.5s ease;

      &:hover {
        transform: scale(1.05);
        border-radius: 10px 10px 10px 10px;
      }
    }

    span {
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      font-size: 2rem;
      font-family: "Roboto Slab", sans-serif;
      background: white;
      width: 150px;
      height: 8rem;
      border-radius: 0 0 10px 10px;
    }
  }
`;

export const Div = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 10rem;

  .carousel {
    margin-top: 10rem;
    width: 100%;
    overflow: hidden;
    cursor: grab;
  }

  .inner {
    display: flex;
    transition: transform 0.5s ease;
  }

  .item {
    padding: 1.4rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item img {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    border-radius: 12px;
    pointer-events: none;
  }
  @keyframes wipe-out-down {
    from {
      clip-path: inset(0 0 0 0);
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }
    to {
      clip-path: inset(100% 0 0 0);
      background-color: pink;
    }
  }

  .location-animation {
    animation: 0.3s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-down both;
  }

  @media (min-width: 768px) {
    .item img {
      width: 40rem;
      height: 40rem;
      object-fit: cover;
      border-radius: 12px;
      pointer-events: none;
    }
  }
`;
