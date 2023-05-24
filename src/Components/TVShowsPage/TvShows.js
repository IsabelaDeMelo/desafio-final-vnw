import React, { useState, useEffect } from 'react'
import axios from "axios"
import NavBar from "../Header/NavBar/NavBar"
import Carousel from "react-elastic-carousel"
import { TVContainer, TVCarousel, TVCard } from "./TVShowsStyle"

export default function TVShows() {
    const [tvshows, setTvshows] = useState([])

    useEffect(() => {
        getTvshows()
    }, [tvshows])

    const getTvshows = async () => {
        await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=a00d9b3a38f13f649d23f8fb35ad2590&language=pt-BR&page=1').then((response) => {
            const Api = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setTvshows(Api)
            console.log(Api)
        }).catch((error) => {
            alert(`${error}`)
        })
    }

    return (
        <TVContainer>
            <NavBar />
            <TVCarousel>
                <h2>Em Alta</h2>
                <Carousel itemsToScroll={2} itemsToShow={2}>
                    {tvshows.map((item) => (
                        <TVCard>
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.overview}</p>
                            </div>
                        </TVCard>
                    ))}
                </Carousel>
            </TVCarousel>
        </TVContainer>
    )
}