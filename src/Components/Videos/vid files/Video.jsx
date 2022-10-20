import React, { useCallback, useEffect, useState } from 'react'
import videosdata from '../json/vidData.json'
import './Video.css'

export default function Video() {

  const [count, setCount] = useState(0)
  const [search, updateSearch] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    setUrl(videosdata.vids[count].vid)
  }, [count])

  const dataURL = useCallback(() => {

    fetch(`https://www.youtube.com/results?search_query=${search}`)
      .then(response => response.json())

      .then((data) => {
        setUrl(data)
      })
      .catch(() => {
        console.log('failed to fetch');
      })

  }, [search])

  const stopVideo = useCallback(() => {
    var iframe = document.querySelector('iframe');
    if (iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
  }, [])

  return (
    <>
      <div id='videoContainer'>
        <div id='blackHead'>
          <div id='searchBox'>
            <input className='searchBars' id='search' type="text" onChange={(e) => updateSearch(e.target.value)} />
            <button className='searchBars' id='lens' onClick={() => search === null ? null : dataURL()}>🔍</button>
          </div>
        </div>

        <iframe
          id='VidCont'
          className="youtube-video"
          src={url}
          allow='paused'
          title="Youtube Player"
          frameBorder="0"

          allowFullScreen />
        <div id='buttonBox2'>
          <div className='vidPageNavigater' id='previousVid' onClick={() => count > 0 ? setCount(count - 1) : setCount(5)}></div>
          <div id='pauseButton' onClick={stopVideo}></div>
          <div className='vidPageNavigater' id='nextVid' onClick={() => count < 5 ? setCount(count + 1) : setCount(0)}></div>
        </div>
      </div>
    </>
  )
}

// `https://www.youtube.com/results?search_query=${props.searchMovie}trailer
