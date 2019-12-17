import React, { useState } from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import WorkoutBackgroundImage from './WorkoutBackgroundImage'
import PlayButton from '../../svgs/PlayButton'
import WorkoutSliderButtons from '../Buttons/WorkoutSliderButtons'
import WorkoutLabelIndicator from '../Indicators/WorkoutLabelIndicator'
import Portal from '../Shared/Portal'
import PopUpVideo from '../WorkoutPage/PopUpVideo'
import { usePortalContext } from '../../context/portalContext'
import useBlurUp from '../../hooks/useBlurUp'
import { above } from '../../styles/Theme'

const WorkoutSection = ({
  workoutTinyBackground,
  workoutBackgrounds,
  title,
  workoutVideos
}) => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [setSmallImage, setLargeImage, setParentContainer] = useBlurUp()

  const [activeVideo, setActiveVideo] = useState(0)
  const [workoutBackgroundAction, setWorkoutBackgroundAction] = useState('')

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
    <WorkoutSectionGrid>
      <BlurUpImageGrid ref={setParentContainer}>
        <WorkoutBackgroundImage
          ref={setLargeImage}
          activeVideo={activeVideo}
          workoutBackgroundAction={workoutBackgroundAction}
          workoutBackgrounds={workoutBackgrounds}
          title={title}
        />
        <PlaceholderImage ref={setSmallImage} src={workoutTinyBackground} />
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
      <Play handleToggleVideo={handleToggleVideo} />
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

const PlaceholderImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
  filter: blur(6px);
  transform: scale(1);
  z-index: 2;
`

const Play = styled(PlayButton)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 60px;
  z-index: 4;
  ${above.mobile`
    width: 80px;
  `}
  ${above.tablet`
    width: 120px;
  `}
`
