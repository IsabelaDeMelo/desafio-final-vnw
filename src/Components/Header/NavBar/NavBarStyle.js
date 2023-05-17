import styled from "styled-components";

export const NavContainer = styled.section`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  position: fixed;
  z-index: 2;
  backdrop-filter: blur(1rem);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.363);

  img {
    height: 8vh;
  }

  div {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      list-style: none;

      li {
        width: 7vw;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: .6s;
      }

      a:hover {
        width: 100%;
        height: 5vh;
        transition: .6s;
        text-align: center;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.greyMoviesBtn};
        border: none;
        border-radius: 1.5rem;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.363);
        cursor: pointer;
      }
    }
  }

  div:nth-child(1) {
    padding-left: 1rem;
  }
`;