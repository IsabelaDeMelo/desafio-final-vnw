import React, { useState, useEffect } from 'react'
import axios from "axios"
import { TopContainer, TopCard } from "./TopStyle"

export default function TopRated() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [movies])

    const getMovies = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a00d9b3a38f13f649d23f8fb35ad2590&language=pt-BR&page=1').then((response) => {
            const Api = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setMovies(Api)
            console.log(Api)
        }).catch((error) => {
            alert(`${error}`)
        })
    }

    return (
        <TopContainer>
                    <h2>Em Alta</h2>
                            {movies.map((item) => (
                                <TopCard>
                                    <img src={item.image} alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <span>{item.release_date}</span>
                                </TopCard>
                            ))}
        </TopContainer>
    )
}
