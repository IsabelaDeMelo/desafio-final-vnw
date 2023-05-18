import React, { useState, useEffect } from 'react'
import axios from "axios"
import { LatestContainer, Card } from "./LatestStyle"
import Carousel from 'react-elastic-carousel'

export default function Latest() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [movies])

    const getMovies = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a00d9b3a38f13f649d23f8fb35ad2590&language=pt-BR&page=1').then((response) => {
            const Api = response.data.results?.map((item) => {
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

    const breakPoints = [];

    return (
        <LatestContainer>
                <h2>Últimos lançamentos</h2>
                <Carousel breakPoints={breakPoints} itemsToScroll={5} itemsToShow={5}>
                    {movies?.map((item) => (
                        <Card>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <span>{item.release_date}</span>
                            <p>{item.overview}</p>
                        </Card>
                    ))}
                </Carousel>
        </LatestContainer>
    )
}
