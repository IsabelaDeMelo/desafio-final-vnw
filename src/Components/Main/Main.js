import React from 'react'
import GenresBar from "./GenresBar/GenresBar"
import Latest from "./LatestReleases/Latest"
import styled from "styled-components"

export const Main = styled.main`
    height: 80vh;
    border: 1px solid red;
`

export default function main() {
    return (
        <Main>
            <GenresBar />
            <Latest />
        </Main>
    )
}
