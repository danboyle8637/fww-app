import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import { above } from '../../styles/Theme'

const CoachingSection = ({ coachingBackground, name, coachingUrl }) => {
  const linkStyle = {
    gridColumn: '1 / -1',
    gridRow: '1 / -1',
    alignSelf: 'center',
    justifySelf: 'center',
    textDecoration: 'none'
  }

  return (
    <WorkoutSectionGrid>
      <BackgroundImage
        src={coachingBackground}
        title={`${name} coaching video`}
        alt={`Learn how the ${name} is going to work.`}
      />
      <Link to={`${coachingUrl}/coaching`} style={linkStyle}>
        <Play />
      </Link>
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
