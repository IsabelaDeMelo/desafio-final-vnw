import styled from "styled-components";
import "animate.css";

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
    cursor: pointer;
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
        width: 100%;
        height: 5vh;
        text-align: center;
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: 0.6s;
      }

      a:hover {
        transition: 0.6s;
        text-align: center;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.green};
        border: none;
        border-radius: 1.5rem;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.363);
        cursor: pointer;
      }
    }
  }

  div:nth-child(1) {
    width: 20vw;
    padding-left: 1rem;
  }

  div:nth-child(3) {
    padding-right: 0.5rem;
  }
`;

export const InputBox = styled.input`
  height: 3.5vh;
  display: ${(props) => props.show};
  padding-left: 0.5rem;
  border: none;
  border-radius: 1rem;
  animation: slideInRight 0.5s;

  input:focus {
    outline: 2px solid #738075;
    transition: 0.2s;
  }
`;
