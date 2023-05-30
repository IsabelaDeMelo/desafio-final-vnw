import React, { useState, useEffect } from 'react'
import axios from "axios"
import Carousel from "react-elastic-carousel"
import { UpcomingContainer, UpcomingCarousel, UpcomingCard } from "./UpcomingStyle"

export default function MoviePage() {
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        getUpcoming()
    }, [upcoming])

    const getUpcoming = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=a00d9b3a38f13f649d23f8fb35ad2590&language=pt-BR&page=1').then((response) => {
            const Api = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setUpcoming(Api)
        }).catch((error) => {
            alert(`${error}`)
        })
    }

    return (
        <section>
            <UpcomingContainer>
                <h1>Filmes</h1>
                <UpcomingCarousel>
                    <h2>Próximos lançamentos</h2>
                    <Carousel itemsToScroll={2} itemsToShow={2}>
                        {upcoming.map((item) => (
                            <UpcomingCard>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.overview}</p>
                                </div>
                            </UpcomingCard>
                        ))}
                    </Carousel>
                </UpcomingCarousel>
            </UpcomingContainer>
        </section>
    )
}
