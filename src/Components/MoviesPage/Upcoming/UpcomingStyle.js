import styled from "styled-components";

export const Container = styled.section`
  height: 130vh;
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

export const UpcomingCarousel = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid red;

  h2 {
    text-indent: 5rem;
  }
`;

export const UpcomingCard = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
`;
