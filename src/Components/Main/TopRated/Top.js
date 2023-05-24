import React, { useState, useEffect } from "react";
import axios from "axios";
import { TopContainer, TopCard, InputBox, Search, Pagination } from "./TopStyle";
import search from "../../../Imgs/search2x.png";

export default function TopRated() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [filtrados, setFiltrados] = useState([])
    const [mode, setMode] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        getMovies();
        filtrar();
    }, [movies, input, filtrados, mode]);

    const getMovies = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a00d9b3a38f13f649d23f8fb35ad2590&language=pt-BR&page=${page}`)
            .then((response) => {
                const Api = response.data.results.map((item) => {
                    return {
                        ...item,
                        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                    };
                });
                setMovies(Api);
            })
            .catch((error) => {
                alert(`${error}`);
            });
    };

    const filtrar = () => {
        const FilmesFiltrados = movies.filter((item) => {
            if (item.title.toLowerCase().includes(input.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        });
        setFiltrados(FilmesFiltrados);
    };

    return (
        <TopContainer>
            <Search>
                <h2>Em Alta</h2>
                <div>
                    <InputBox placeholder="Procure seu filme aqui!" show={mode === false ? "none" : "initial"} onChange={(e) => setInput(e.target.value)} />
                    <img
                        onClick={() => setMode(!mode)}
                        src={search}
                        alt="Ícone lupa"
                    />
                </div>
            </Search>
            {filtrados.map((item, index) => (
                <TopCard key={index}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                </TopCard>
            ))}
            <Pagination>
                <button onClick={() => { setPage(1) }}>Página 1</button>
                <button onClick={() => {
                    if (page > 1) {
                        setPage(page - 1)
                    } else {
                        alert("Não há página anterior.")
                    }
                }}>Anterior</button>
                <button onClick={() => { setPage(page + 1) }}>Próxima</button>
            </Pagination>
        </TopContainer>
    );
}
