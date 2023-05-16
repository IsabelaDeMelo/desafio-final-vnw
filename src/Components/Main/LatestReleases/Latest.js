import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Teste } from "./LatestStyle"

export default function Latest() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [movies])

    const getMovies = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a00d9b3a38f13f649d23f8fb35ad2590&language=pt-BR&page=1').then((response) => {
            const allApi = response.data.results?.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setMovies(allApi)
        }).catch((error) => {
            alert(`${error}`)
        })
    }

    return (
        <section>
            <h2>Últimos lançamentos</h2>
            {movies?.map((item) => (
                <div>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </section>
    )
}
