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

    player.on('play', () => {})

    player.on('loaded', () => {
      setVideoLoaded(true)
    })

    return () => {
      player
        .destroy()
        .then(() => {})
        .catch(error => console.log(error))
    }
  }, [videoId])

  return (
    <VideoContainer>
      <VideoWrapper ref={videoContainerRef} />
      {videoLoaded ? null : (
        <>
          <VideoLoadingScreen>
            <Loader />
          </VideoLoadingScreen>
        </>
      )}
    </VideoContainer>
  )
}

export default VimeoPlayer

const VideoContainer = styled.div`
  position: relative;
  padding-top: calc(9 / 16 * 100%);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  box-shadow: 0 3px 4px 3px rgba(0, 0, 0, 0.3);
  width: 100%;
`

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
`

const VideoLoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  width: 100%;
  height: 100%;
  z-index: 2;
`

const Loader = styled(LoadingKettlebell)`
  width: 60px;
  z-index: 3;
`
