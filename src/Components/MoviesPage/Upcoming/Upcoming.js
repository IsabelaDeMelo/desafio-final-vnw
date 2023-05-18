import React, { useState, useEffect } from 'react'
import axios from "axios"
import NavBar from "../../Header/NavBar/NavBar"
import Carousel from "react-elastic-carousel"
import { Container, UpcomingCarousel, UpcomingCard } from "./UpcomingStyle"

export default function MoviePage() {
    // UPCOMING API //
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

    // NOW PLAYING API //
    const [now, setNow] = useState([])

    useEffect(() => {
        getNow()
    }, [now])

    const getNow = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a00d9b3a38f13f649d23f8fb35ad2590&language=pt-BR&page=1').then((response) => {
            const Api = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setNow(Api)
        }).catch((error) => {
            alert(`${error}`)
        })
    }
    return (
        <section>
            <NavBar />
            <Container>
                <h1>Filmes</h1>
                <UpcomingCarousel>
                    <h2>Próximos lançamentos</h2>
                    <Carousel itemsToScroll={5} itemsToShow={5}>
                        {upcoming.map((item) => (
                            <UpcomingCard>
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                            </UpcomingCard>
                        ))}
                    </Carousel>
                </UpcomingCarousel>
            </Container>
        </section>
    )
}
