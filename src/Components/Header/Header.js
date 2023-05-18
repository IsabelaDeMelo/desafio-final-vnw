import React from "react";
import Nav from "./NavBar/NavBar"
import MoviePage from "./MoviePage/FirstMovie"
import styled from "styled-components"

export const Header = styled.header`
  height: 110vh;
`

export default function header() {
  return (
    <Header>
      <Nav />
      <MoviePage />
    </Header>
  );
}
