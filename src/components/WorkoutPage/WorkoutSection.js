import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import WorkoutBackgroundImage from './WorkoutBackgroundImage'
import PlayButton from '../../svgs/PlayButton'
import WorkoutSliderButtons from '../Buttons/WorkoutSliderButtons'
import WorkoutLabelIndicator from '../Indicators/WorkoutLabelIndicator'
import Portal from '../Shared/Portal'
import PopUpVideo from '../WorkoutPage/PopUpVideo'
import { usePortalContext } from '../../context/portalContext'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { above } from '../../styles/Theme'

const WorkoutSection = ({
  workoutTinyBackground,
  workoutBackgrounds,
  title,
  workoutVideos
}) => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const [blurUp, setBlurUp] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)
  const [workoutBackgroundAction, setWorkoutBackgroundAction] = useState('')

  const [setNode, runAction] = useIntersectionObserver({
    rootMargin: '0px 0px -100px 0px',
    shouldUnobserve: true
  })

  useEffect(() => {
    if (runAction) {
      setBlurUp(true)
    }
  }, [runAction])

  const handleNextVideo = () => {
    setWorkoutBackgroundAction('next')
    if (activeVideo < workoutBackgrounds.length - 1) {
      setActiveVideo(prevIndex => prevIndex + 1)
    }
  }

  const handlePrevVideo = () => {
    setWorkoutBackgroundAction('prev')
    if (activeVideo > 0) {
      setActiveVideo(prevIndex => prevIndex - 1)
    }
  }

  const handleToggleVideo = () => {
    dispatchPortalAction({ type: 'toggleWorkoutVideo' })
  }

  return (
    <WorkoutSectionGrid ref={setNode}>
      <BlurUpImageGrid>
        <WorkoutBackgroundImage
          activeVideo={activeVideo}
          workoutBackgroundAction={workoutBackgroundAction}
          workoutBackgrounds={workoutBackgrounds}
          workoutTinyBackground={workoutTinyBackground}
          blurUp={blurUp}
          title={title}
        />
      </BlurUpImageGrid>
      <WorkoutSliderButtons
        handleNextVideo={handleNextVideo}
        handlePrevVideo={handlePrevVideo}
        activeVideo={activeVideo}
        numberOfWorkouts={workoutBackgrounds.length}
      />
      <WorkoutLabelIndicator
        type={'workout'}
        workoutBackgrounds={workoutBackgrounds}
        activeVideo={activeVideo}
      />
      <Play
        gradientId="workoutVideoButton"
        handleToggleVideo={handleToggleVideo}
      />
      <Portal>
        <PopUpVideo
          title={'Workout'}
          workoutVideos={workoutVideos}
          activeVideo={activeVideo}
        />
      </Portal>
    </WorkoutSectionGrid>
  )
}

export default WorkoutSection

const BlurUpImageGrid = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  overflow: hidden;
`

const Play = styled(PlayButton)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 60px;
  z-index: 4;
  cursor: pointer;
  ${above.mobile`
    width: 80px;
  `}
  ${above.tablet`
    width: 120px;
  `}
`
