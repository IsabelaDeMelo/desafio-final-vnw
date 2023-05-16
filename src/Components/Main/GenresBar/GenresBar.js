import React from 'react'
import { GenresContainer, ImgBox } from "./GenresBarStyle"
import search from "../../../Imgs/search2x.png";

export default function GenresBar() {
    return (
        <GenresContainer>
             <h3>Popular</h3>
             <h3>Drama</h3>
             <h3>Ação</h3>
             <h3>Aventura</h3>
             <h3>Comédia</h3>
             <h3>Crime</h3>
             <h3>Fantasia</h3>
             <h3>Família</h3>
             <div><img src={search} alt="Lupa ícone" /></div>
        </GenresContainer>
    )
}
