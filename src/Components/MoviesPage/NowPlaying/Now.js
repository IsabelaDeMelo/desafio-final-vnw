import React, { useState, useEffect } from 'react'
import axios from "axios"
import Carousel from "react-elastic-carousel"
import { NowContainer, NowCarousel, NowCard } from "./NowStyle"

export default function Now() {

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
            <NowContainer>
                <NowCarousel>
                    <h2>No cinema</h2>
                    <Carousel itemsToScroll={2} itemsToShow={2}>
                        {now.map((item) => (
                            <NowCard>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.overview}</p>
                                </div>
                            </NowCard>
                        ))}
                    </Carousel>
                </NowCarousel>
            </NowContainer>
        </section>
    )
}