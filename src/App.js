import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Video from './Components/Videos/vid files/Video'
import MusicData from './Components/Musics/local imported music/MusicData'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video' element={<Video />} />
          <Route path='/musicdata' element={<MusicData />} />
          <Route path='*' element={<h1>page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}