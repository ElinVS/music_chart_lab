import React from "react"
import Songs from "./Songs"

const SongList = ({songs}) => {

    const songsArray = songs.map((song) => {
        return (
        <Songs>
            <h3><em> {song['im:name'].label} </em></h3>
            <img id="song-img" src={song['im:image'][0].label} alt='artist image'/>
            <h4> {song['im:artist'].label} </h4>
        </Songs>
        )
    })

    return (
        <>
            <ol>
                {songsArray}
            </ol>
        </>
    )
}



export default SongList