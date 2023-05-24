import styled from "styled-components";

export const TopContainer = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Search = styled.section`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 85%;
    transition: 0.3s;
  }

  img:hover {
    transition: 0.3s;
    transform: scale(1.04);
    cursor: pointer;
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
    transition: 0.3s;
  }

  img:hover {
    transition: 0.3s;
    transform: scale(1.05);
  }

  h3 {
    font-size: 1rem;
  }
`;

export const InputBox = styled.input`
  height: 3.5vh;
  display: ${(props) => props.show};
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  animation: slideInRight 0.5s;

  &&:focus {
    outline: 2px solid #738075;
    transition: 0.2s;
  }
`;

export const Pagination = styled.section`
  display: flex;
  gap: 1rem;
  padding-bottom: 3rem;

  button {
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 0.5rem;
    transition: 0.2s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    transition: 0.2s;
  }
`;
