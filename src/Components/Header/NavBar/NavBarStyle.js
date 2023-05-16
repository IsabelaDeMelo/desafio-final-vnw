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
  backdrop-filter: blur(1rem);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.363);

  img {
    height: 8vh;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    ul {
      display: flex;
      gap: 2rem;
      list-style: none;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color:  ${({ theme }) => theme.colors.text};
        text-decoration: none;
      }
    }
  }

  div:nth-child(1) {
    padding-left: 1rem;
  }

  div:nth-child(3) {
    padding-right: 1rem;
  }
`;

export const BtnNav = styled.button`
  width: 10vw;
  height: 7vh;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.greyMoviesBtn};
  font-size: 1rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.363);
`;
