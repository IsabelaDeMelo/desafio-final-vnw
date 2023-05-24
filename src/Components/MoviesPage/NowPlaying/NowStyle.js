import styled from "styled-components";

export const NowContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.black};

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;
export const NowCarousel = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    text-align: center;
  }
`;

export const NowCard = styled.section`
  width: 90%;
  height: 55vh;
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  img {
    width: 50%;
    height: 50vh;
  }
`;
