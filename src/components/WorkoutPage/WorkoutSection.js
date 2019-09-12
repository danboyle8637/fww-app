import React from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import WorkoutImage from '../../images/strong-reset-workout1-cover.jpg'

const WorkoutSection = ({ title, altText }) => {
  return (
    <WorkoutSectionGrid>
      <BackgroundImage src={WorkoutImage} title={title} alt={altText} />
      <Play />
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
`
