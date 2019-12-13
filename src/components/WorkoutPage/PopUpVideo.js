import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import VideoTransition from '../../Animations/Transitions/VideoTransition'
import VimeoPlayer from '../Shared/VimeoPlayer'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const PopUpVideo = ({ title, workoutVideos, activeVideo, programId }) => {
  const [portalState, dispatchPortalAction] = usePortalContext()
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

    if (title === 'Cool_Down') {
      setShowVideo(coolDownIsOpen)
    }

    if (title === 'Warm_Up') {
      setShowVideo(warmUpIsOpen)
    }

    if (title === 'Training_Plan') {
      setShowVideo(trainingPlanIsOpen)
    }
  }, [workoutIsOpen, warmUpIsOpen, coolDownIsOpen, title, trainingPlanIsOpen])

  useEffect(() => {
    if (title === 'Workout') {
      setVideoId(workoutVideos[activeVideo])
    }

    if (title === 'Cool_Down') {
      setVideoId(371274054)
    }

    if (title === 'Warm_Up') {
      setVideoId(371272410)
    }

    if (title === 'Training_Plan') {
      if (programId === '7DayIgniteReset') {
        setVideoId(370761992)
      }

      if (programId === '7DayBodyBurnReset') {
        setVideoId(370760838)
      }

      if (programId === '7DayStrongReset') {
        setVideoId(370763080)
      }
    }
  }, [activeVideo, programId, title, workoutVideos])

  return (
    <VideoTransition showVideo={showVideo}>
      <VideoContainer>
        <VimeoPlayer videoId={videoId} />
        <ButtonContainer>
          <BaseButton
            handleClick={() => dispatchPortalAction({ type: 'closeVideo' })}
          >
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
  z-index: 20;
  ${above.laptop`
    padding-left: 200px;
    padding-right: 200px;
  `}
`

const ButtonContainer = styled.div`
  margin: 20px;
  padding: 0 16px;
  width: 100%;
`
