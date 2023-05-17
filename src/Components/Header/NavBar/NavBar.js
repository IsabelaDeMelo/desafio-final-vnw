import React from "react";
import { NavContainer, BtnNav } from "./NavBarStyle";
import logo from "../../../Imgs/logo2x.png";
import search from "../../../Imgs/search2x.png";

export default function NavBar() {
  return (
    <NavContainer>
      <div>
        <img src={logo} alt="Dell Movies Logo" />
      </div>
      <div>
        <ul>
          <li><a href="">Séries</a></li>
          <li><a href="">Filmes</a></li>
        </ul>
      </div>
      <div>
        <img src={search} alt="Ícone lupa" />
        <ul>
          <li><a href="">Filtro</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
    </NavContainer>
  );
}
