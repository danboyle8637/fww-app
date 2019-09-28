import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import WorkoutBackgroundImage from './WorkoutBackgroundImage'
import PlayButton from '../../svgs/PlayButton'
import WorkoutSliderButtons from '../Buttons/WorkoutSliderButtons'
import NumberOfWorkoutsIndicator from '../Indicators/NumberOfWorkoutsIndicator'
import Portal from '../Shared/Portal'
import PopUpVideo from '../WorkoutPage/PopUpVideo'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const WorkoutSection = ({ workoutBackgrounds, name, workoutVideos }) => {
  // eslint-disable-next-line
  const [portalState, dispatch] = usePortalContext()

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
    dispatch({ type: 'toggleWorkoutVideo' })
  }

  return (
    <WorkoutSectionGrid>
      <WorkoutBackgroundImage
        activeVideo={activeVideo}
        workoutBackgroundAction={workoutBackgroundAction}
        workoutBackgrounds={workoutBackgrounds}
        name={name}
      />
      <WorkoutSliderButtons
        handleNextVideo={handleNextVideo}
        handlePrevVideo={handlePrevVideo}
        activeVideo={activeVideo}
        numberOfWorkouts={workoutBackgrounds.length}
      />
      <NumberOfWorkoutsIndicator
        workoutBackgrounds={workoutBackgrounds}
        activeVideo={activeVideo}
      />
      <Play handleToggleVideo={handleToggleVideo} />
      <Portal
        component={
          <PopUpVideo
            title={'Workout'}
            workoutVideos={workoutVideos}
            activeVideo={activeVideo}
          />
        }
      />
    </WorkoutSectionGrid>
  )
}

export default WorkoutSection

const Play = styled(PlayButton)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 60px;
  z-index: 2;
  ${above.mobile`
    width: 80px;
  `}
`
