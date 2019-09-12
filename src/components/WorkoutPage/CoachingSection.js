import React from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import CoachingImage from '../../images/strong-reset-workout1-coaching-cover.jpg'

const CoachingSection = ({ title, altText }) => {
  return (
    <WorkoutSectionGrid>
      <BackgroundImage src={CoachingImage} title={title} alt={altText} />
      <Play />
    </WorkoutSectionGrid>
  )
}

export default CoachingSection

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
