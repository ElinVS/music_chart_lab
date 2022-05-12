import React from "react"
import Songs from "./Songs"

const SongList = ({songs}) => {

    const songsArray = songs.map((song) => {
        return (
        <Songs>
            <table>
            
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                <td> <img id="song-img" src={song['im:image'][2].label} alt='artist image'/></td>
                <td><h3><em> {song['im:name'].label}, </em></h3></td>
                <td><h4> {song['im:artist'].label} </h4></td>
                <td><audio></audio></td>
            </tr>
            </table>
            
           
            
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