import React from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import { above } from '../../styles/Theme'

const CoachingSection = ({ coachingBackground, name }) => {
  return (
    <WorkoutSectionGrid>
      <BackgroundImage 
        src={coachingBackground} 
        title={`${name} coaching video`} 
        alt={`Learn how the ${name} is going to work.`} 
      />
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
  ${above.mobile`
    width: 80px;
  `}
`
