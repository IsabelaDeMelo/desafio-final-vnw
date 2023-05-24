import styled from "styled-components";

export const FormContainer = styled.section`
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Form = styled.section`
  width: 40%;
  height: 60vh;
  background-color: #3e4a40;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
`;

export const EmailPassword = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  input {
    height: 7vh;
    background-color: #c9c9c9;
    border: none;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const CheckBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: .4rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  button {
    width: 100%;
    height: 5vh;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: 0.3s;
  }

  button:hover {
    transition: 0.3s;
    opacity: 0.5;
    cursor: pointer;
}

`;
