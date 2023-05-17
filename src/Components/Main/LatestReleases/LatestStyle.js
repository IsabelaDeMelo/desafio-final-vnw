import styled from "styled-components"

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
`


export const Card = styled.section`
    width: 80%;    
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
    
`