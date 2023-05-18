import React, { useState } from "react";
import { NavContainer, InputBox } from "./NavBarStyle";
import logo from "../../../Imgs/logo2x.png";
import search from "../../../Imgs/search2x.png";
import { Link } from "react-router-dom"

export default function NavBar() {
  const [mode, setMode] = useState(false);

  return (
    <NavContainer>
      <div>
        <img src={logo} alt="Dell Movies Logo" />
      </div>
      <div>
        <ul>
          <li>
            <a href="">Séries</a>
          </li>
          <li>
            <Link to="/Movies">Filmes</Link>
          </li>
        </ul>
      </div>
      <div>
        <InputBox show={mode === false ? "none" : "initial"} />
        <img onClick={() => setMode(!mode)} src={search} alt="Ícone lupa" />
        <ul>
          <li>
            <a href="">Filtro</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
}
