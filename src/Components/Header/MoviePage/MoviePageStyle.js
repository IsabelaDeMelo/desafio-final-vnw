import styled from "styled-components";
import background from "../../../Imgs/headerBg2x.png";

export const MovieContainer = styled.section`
  height: 110vh;
  background-image: url(${background});
  background-size: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: inset 0 0 15 rem 3rem #000000;

  h1 {
    font-size: 2.2rem;
  }

  span {
    font-weight: 100;
  }

  p {
    width: 60%;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.7rem;
    padding-bottom: 1rem;
  }

  section {
    height: 60vh;
    padding-left: 10rem;

    img {
      width: 15%;
    }
  }
`;

export const Review = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  gap: 1rem;

  span:nth-child(1) {
    font-size: 1rem;
  }

  span:nth-child(2) {
    font-size: 2rem;
    font-weight: 400;
  }

  span:nth-child(3) {
    width: 4vw;
    height: 4vh;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 0.1rem;
    font-weight: 900;
    border-radius: 3px;
  }
`;

export const Btns = styled.div`
  display: flex;
  gap: 1rem;

  button {
    width: 15vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 20px;
  }

  button:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.orangeBtn};
  }

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.greyTrailerBtn};
  }
`;
