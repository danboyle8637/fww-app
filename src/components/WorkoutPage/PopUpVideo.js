import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import VideoTransition from '../../Animations/Transitions/VideoTransition'
import VimeoPlayer from '../Shared/VimeoPlayer'
import { usePortalContext } from '../../context/portalContext'

const PopUpVideo = ({ title, workoutVideos, activeVideo }) => {
  // eslint-disable-next-line
  const [portalState, dispatch] = usePortalContext()
  const [showVideo, setShowVideo] = useState(false)
  const [videoId, setVideoId] = useState(0)

  const workoutIsOpen = portalState.workoutVideo.isOpen
  const warmUpIsOpen = portalState.warmUpVideo.isOpen
  const coolDownIsOpen = portalState.coolDownVideo.isOpen
  const trainingPlanIsOpen = portalState.trainingPlanVideo.isOpen

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

    if (title === 'Training Plan') {
      setShowVideo(trainingPlanIsOpen)
    }
  }, [workoutIsOpen, warmUpIsOpen, coolDownIsOpen, title, trainingPlanIsOpen])

  useEffect(() => {
    if (title === 'Workout') {
      setVideoId(workoutVideos[activeVideo])
    }
  }, [activeVideo, title, workoutVideos])

  return (
    <VideoTransition showVideo={showVideo}>
      <VideoContainer>
        <VimeoPlayer videoId={videoId} />
        <ButtonContainer>
          <BaseButton handleClick={() => dispatch({ type: 'closeVideo' })}>
            Close Video
          </BaseButton>
        </ButtonContainer>
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
  background: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  z-index: 20;
`

const ButtonContainer = styled.div`
  margin: 40px;
  padding: 0 16px;
  width: 100%;
`
