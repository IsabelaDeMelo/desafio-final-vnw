import React from "react";
import { GenresContainer } from "./GenresBarStyle";

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
        </GenresContainer>
    );
}
