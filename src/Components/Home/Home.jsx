import React from 'react'
import VideoPlayer from '../Videos/vid files/VideoPlayer'
import MusicPllayer from '../Musics/Music files/MusicPlayer'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className='main-container'>
                <div className='blur' ></div>
                <div id='header' >
                    <a href='https://github.com/Aman-Dhyani'> <img id='refImage' src="https://avatars.githubusercontent.com/u/102688642?v=4" alt="error" /></a>
                    <h4>Welcome To My Mideo</h4>
                </div>
                <VideoPlayer />
                <MusicPllayer />
            </div>
        </>
    )
}
