import React, { useEffect, useState } from 'react'
import videosdata from '../json/vidData.json'
import './Video.css'

export default function Video() {

  const [count, setCount] = useState(0)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    setUrl(videosdata.vids[count].vid)
  }, [count])

  return (
    <>
      <div id='videoContainer'>
        <iframe
          id='VidCont'
          width="560"
          height="315"
          src={url}
          title="Youtube Player"
          frameBorder="0"
          allowFullScreen />
        <div className='vidPageNavigater' id='previousVid' onClick={() => count > 0 ? setCount(count - 1) : setCount(4)}>Previous</div>
        <div className='vidPageNavigater' id='nextVid' onClick={() => count < 4 ? setCount(count + 1) : setCount(0)}>Next</div>
      </div>
    </>
  )
}
