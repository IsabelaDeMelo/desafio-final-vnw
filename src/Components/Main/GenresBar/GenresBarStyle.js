import styled from "styled-components";
import "animate.css";

export const GenresContainer = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.black};
  font-size: 0.9rem;
  gap: 4rem;

  h3 {
    font-weight: 200;
    transition: 0.2s;
  }

  h3:hover {
    opacity: 0.6;
    transition: 0.2s;
    cursor: pointer;
  }
`;
