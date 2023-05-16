import React from "react";
import Nav from "./NavBar/NavBar"
import MoviePage from "./MoviePage/MoviePage"
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
