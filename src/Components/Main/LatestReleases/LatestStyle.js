import styled from "styled-components";

export const LatestContainer = styled.section`
  width: 95%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;

  h2 {
    text-indent: 5rem;
  }

  .rec-pagination {
    display: none;
  }
`;

export const Card = styled.section`
  width: 80%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
  }

  h3 {
    font-size: 1rem;
  }

  button {
    width: 50%;
    height: 6%;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.green};
    border: none;
    border-radius: 1.5rem;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.363);
    transition: 0.6s;
  }

  button:hover {
    transform: scale(1.09);
    transition: 0.6s;
    cursor: pointer;
  }

  //   p {
  //     position: absolute;
  //     text-align: center;
  //     opacity: 1;
  //     width: 4%;
  //     font-size: 0.7rem;
  //     z-index: 10;
  //   }

  // ::before {
  //   content: "";
  //   background: #000000c9;
  //   opacity: 0.85;
  //   position: absolute;
  //   width: 4%;
  //   height: 0;
  //   transition: 0.4s ease-in-out;
  //   bottom: 6.8rem;
  // }

  // :hover::before {
  //   height: 100%;
  // }
`;
