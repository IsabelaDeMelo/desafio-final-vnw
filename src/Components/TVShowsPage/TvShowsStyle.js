import styled from "styled-components";

export const TVContainer = styled.section`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.black};

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

export const TVCarousel = styled.section`
  width: 100%;
  max-height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding-top: 7rem;

  h2 {
    text-align: center;
  }

  .rec-pagination {
    display: none;
  }
`;

export const TVCard = styled.section`
  width: 90%;
  height: 80vh;
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

  .rec-pagination {
    display: none;
  }
`;
