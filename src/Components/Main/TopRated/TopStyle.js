import styled from "styled-components";

export const TopContainer = styled.section`
  width: 90%;
  height: 260vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    width: 100%;
    text-indent: 4rem;
  }
`;

export const TopCard = styled.div`
  width: 15vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
  }

  h3 {
    font-size: 1rem;
  }
`;
