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
    <VideoContainer>
      <VideoWrapper ref={videoContainerRef} />
      {videoLoaded ? null : (
        <>
          <Loader />
          <VideoLoadingScreen />
        </>
      )}
    </VideoContainer>
  )
}

export default VimeoPlayer

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  box-shadow: 0 3px 4px 3px rgba(0, 0, 0, 0.3);
  width: 100%;
`

const VideoWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  z-index: 1;
`

const VideoLoadingScreen = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
  background: ${props => props.theme.mainBackgroundBorderColor};
  width: 100%;
  height: 100%;
  z-index: 2;
`

const Loader = styled(LoadingKettlebell)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 60px;
  z-index: 3;
`
