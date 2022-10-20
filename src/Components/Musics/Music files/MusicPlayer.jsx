import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MusicPlayer() {
    return (
        <>
            <div className='main-player-container' id='main-musicplayer-container' >
                <div className='titles' id='musicPlater-title'>Musics</div>
                <div className='sub-player-container' id='sub-musicPlayer-container' ></div>
                <div className='player-container' id='musicPic-Container'>
                    <NavLink to={'/musicdata'}><div className='pulsing' id='musicPulse' ></div></NavLink>
                </div>
            </div>
        </>
    )
}
