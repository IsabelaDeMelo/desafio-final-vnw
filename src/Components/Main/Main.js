import React from "react";
import GenresBar from "./GenresBar/GenresBar";
import LatestReleases from "./LatestReleases/Latest";
import TopRated from "./TopRated/Top";
import styled from "styled-components";
import Header from "../Header/Header"

export const Main = styled.main`
  width: 100%;
  height: 400vh;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function main() {
  return (
    <div>
      <Header />
      <Main>
        <GenresBar />
        <LatestReleases />
        <TopRated />
      </Main>
    </div>
  );
}
