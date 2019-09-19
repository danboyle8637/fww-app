import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import VideoTransition from '../../Animations/Transitions/VideoTransition'
import { usePortalContext } from '../../context/portalContext'

const PopUpVideo = ({ title }) => {
  // eslint-disable-next-line
  const [portalState, dispatch] = usePortalContext()
  const [showVideo, setShowVideo] = useState(false)

  const workoutIsOpen = portalState.workoutVideo.isOpen
  const warmUpIsOpen = portalState.warmUpVideo.isOpen
  const coolDownIsOpen = portalState.coolDownVideo.isOpen

  useEffect(() => {
    if (title === 'Workout') {
      setShowVideo(workoutIsOpen)
    }

    if (title === 'Cool Down') {
      setShowVideo(coolDownIsOpen)
    }

    if (title === 'Warm Up') {
      setShowVideo(warmUpIsOpen)
    }
  }, [workoutIsOpen, warmUpIsOpen, coolDownIsOpen, title])

  return (
    <VideoTransition showVideo={showVideo}>
      <VideoContainer>
        <Words>{title}</Words>
        <CloseButton onClick={() => dispatch({ type: 'closeVideo' })}>
          Click to Close
        </CloseButton>
      </VideoContainer>
    </VideoTransition>
  )
}

export default PopUpVideo

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 20;
`

const CloseButton = styled.button`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.tertiaryAccent};
  color: #f8f8f8;
  border: none;
  border-radius: 6px;
`

const Words = styled.h3`
  font-size: 22px;
  color: #f8f8f8;
`
