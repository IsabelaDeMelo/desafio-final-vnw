import styled from "styled-components"

export const GenresContainer = styled.section`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.black};
    font-size: 0.9rem;
    gap: 5rem;
    
    h3 {
        font-weight: 200;
    }

    div {
        img {
            width: 65%;
        }
    }
`
