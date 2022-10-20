import React from 'react'
import { NavLink } from 'react-router-dom'

export default function videoPlayer() {
    return (
        <>
            <div className='main-player-container' id='main-videoplayer-container'>
                <div className='titles' id='videoPlater-title'>Videos</div>
                <div className='sub-player-container' id='sub-videoPlayer-container'></div>
                <div className='player-container' id='videoPic-Container'>
                    <NavLink to={'/video'}><div className='pulsing' id='videoPulse'>🎥</div></NavLink>
                </div>
            </div>
        </>
    )
}
