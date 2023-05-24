import React from 'react'
import NavBar from "../Header/NavBar/NavBar"
import Upcoming from "./Upcoming/Upcoming"
import NowPlaying from "./NowPlaying/Now"

export default function MoviesPage() {
    return (
        <div>
            <NavBar />
            <Upcoming />
            <NowPlaying />
        </div>
    )
}
