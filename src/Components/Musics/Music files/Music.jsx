import React, { useReducer, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import musicData from '../json/musicData.json'
import './Music.css'

export default function Music(props) {

  // ----- reducer hook for count ---------
  function reducer(count, action) {
    if (action.type === "prev") return count > 0 ? count - 1 : 9
    if (action.type === "next") return count < 9 ? count + 1 : 0
    if (action.type === "suffleCount") return count = Math.floor(Math.random() * 10)
  }

  const [count, dispatch] = useReducer(reducer, 0)

  // ----- state hook ----------- 
  const [anime, updateAnime] = useState('paused')
  const [anime2, updateAnime2] = useState('')
  const artistImage = musicData.music[count].artistPic
  const songName = musicData.music[count].songName
  const albumName = musicData.music[count].album
  const artistName = musicData.music[count].artist
  const newAudios = props.musicArr

  return (
    <>
      <div id='MusicPageDiv'>
        <div id='backgroundContainer' style={{ backgroundImage: `url(${artistImage})` }} ></div>
        <div id='musicContainer'>
          <AudioPlayer src={newAudios[count]} onPause={() => updateAnime('paused')} onPlay={() => updateAnime('') || updateAnime2('rotating')} />
          <div id='musicArtistName' ><h1>{artistName}</h1></div>
          <div id='musicContainerImage' style={{ backgroundImage: `url(${artistImage})`, animation: `${anime2} 10s linear infinite ${anime}` }}>
            <div id='musicContainerImageLogo' style={{ animation: `${anime2} 10s linear infinite reverse ${anime}` }} ></div>
          </div>
          <div id='songName' ><h3>{songName}</h3></div>
          <div id='albumName' ><h2>{albumName}</h2></div>
          <button className='musicNavigater' id='prevMusic' onClick={() => updateAnime2('') || dispatch({ type: "prev" })}></button>
          <button className='musicNavigater' id='nextMusic' onClick={() => updateAnime2('') || dispatch({ type: "next" })}></button>
          <div id='suffleMusic' onClick={() => dispatch({ type: "suffleCount" })}></div>
        </div>
      </div>
    </>
  )
}