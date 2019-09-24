import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ViemoPlayer from '@vimeo/player'

import LoadingKettlebell from '../../svgs/LoadingKettlebell'

const VimeoPlayer = ({ videoId }) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoContainerRef = useRef(null)

  useEffect(() => {
    const player = new ViemoPlayer(videoContainerRef.current, {
      id: videoId,
      responsive: true,
      controls: true
    })

    player.on('play', () => {
      console.log('playing video!')
    })

    player.on('loaded', () => {
      console.log('Video Loaded')
      setVideoLoaded(true)
    })

    return () => {
      player
        .destroy()
        .then(() => {
          console.log('Player was successfully destroyed!')
        })
        .catch(error => console.log(error))
    }
  }, [videoId])

  return (
    <>
      <VideoContainer ref={videoContainerRef} />
      {videoLoaded ? <div>True</div> : <div>False</div>}
      <Loader loading={true} />
    </>
  )
}

export default VimeoPlayer

const VideoContainer = styled.div`
  width: 100%;
  box-shadow: 0 3px 4px 3px rgba(0, 0, 0, 0.3);
`

const Loader = styled(LoadingKettlebell)`
  width: 60px;
`
