import React from "react";
import { MovieContainer, Review, Btns } from "./FirstMovieStyle"
import star from "../../../Imgs/star2x.png";
import play from "../../../Imgs/play60.png";
import trailer from "../../../Imgs/movie50.png";

export default function MoviePage() {
  return (
    <MovieContainer>
      <section>
        <h1>Avatar: o Caminho da Água</h1>
        <span>3hr 23min | Fantasia, Família | 2023</span>
        <Review>
          <img src={star} alt="ícone estrela" />
          <span>9,9 <span>/10</span></span>
          <span>IMDb</span>
        </Review>
        <p>
          Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
          ficarem juntos. No entanto, eles devem sair de casa e explorar as
          regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
          travar uma guerra difícil contra os humanos.
        </p>
        <Btns>
          <button>
            <img src={play} alt="Ícone play" />
            Assistir agora
          </button>
          <button>
            <img src={trailer} alt="Ícone trailer" /> 
            Trailer
          </button>
        </Btns>
      </section>
    </MovieContainer>
  );
}
