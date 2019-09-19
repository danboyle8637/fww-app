import React from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import Portal from '../Shared/Portal'
import PopUpVideo from '../WorkoutPage/PopUpVideo'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const WorkoutSection = ({ workoutBackground, name }) => {
  // eslint-disable-next-line
  const [portalState, dispatch] = usePortalContext()

  const handleToggleVideo = () => {
    dispatch({ type: 'toggleWorkoutVideo' })
  }

  return (
    <WorkoutSectionGrid>
      <BackgroundImage 
        src={workoutBackground} 
        title={`${name} workout background`} 
        alt={`Let's do the ${name} together and get the ultimate burn, press the play button.`} 
      />
      <Play handleToggleVideo={handleToggleVideo} />
      <Portal>
        <PopUpVideo title={'Workout'} />
      </Portal>
    </WorkoutSectionGrid>
  )
}

export default WorkoutSection

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px;
  width: 100%;
`

const Play = styled(PlayButton)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 60px;
  z-index: 1;
  ${above.mobile`
    width: 80px;
  `}
`
