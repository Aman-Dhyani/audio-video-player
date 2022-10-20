import React from 'react'
import VideoPlayer from '../Videos/vid files/VideoPlayer'
import MusicPllayer from '../Musics/Music files/MusicPlayer'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className='main-container'>
                <p>a react-applicstion where you can play music and youtube video</p>
                <div id='header' >
                    <h4>Welcome To My Mideo</h4>
                </div>
                <VideoPlayer />
                <MusicPllayer />
            </div>
        </>
    )
}
