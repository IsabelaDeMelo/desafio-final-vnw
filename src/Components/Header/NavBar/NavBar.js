import React from "react";
import { NavContainer } from "./NavBarStyle";
import logo from "../../../Imgs/logo2x.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <NavContainer>
      <div>
        <Link to="/" ><img src={logo} alt="Dell Movies Logo" /></Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/TVShows">Séries</Link>
          </li>
          <li>
            <Link to="/Movies">Filmes</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Filtro</a>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
}
