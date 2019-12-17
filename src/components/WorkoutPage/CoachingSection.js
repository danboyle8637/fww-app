import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import WorkoutLabelIndicator from '../Indicators/WorkoutLabelIndicator'
import useBlurUp from '../../hooks/useBlurUp'
import { above } from '../../styles/Theme'

const CoachingSection = ({
  coachingTinyBackground,
  coachingBackground,
  title,
  coachingUrl,
  coachingVideo
}) => {
  const [setSmallImage, setLargeImage, setParentContainer] = useBlurUp()

  const linkStyle = {
    gridColumn: '1 / -1',
    gridRow: '1 / -1',
    alignSelf: 'center',
    justifySelf: 'center',
    textDecoration: 'none'
  }

  return (
    <WorkoutSectionGrid>
      <BlurUpImageGrid ref={setParentContainer}>
        <CoachingImage
          ref={setLargeImage}
          src={coachingBackground}
          title={`${title} coaching video`}
          alt={`Learn how the ${title} is going to work.`}
        />
        <PlaceholderImage
          ref={setSmallImage}
          src={coachingTinyBackground}
          title={`${title} coaching video`}
          alt={`Learn how the ${title} is going to work.`}
        />
      </BlurUpImageGrid>
      <WorkoutLabelIndicator type={'coaching'} />
      <Link
        to={{
          pathname: `${coachingUrl}/coaching`,
          state: { coachingVideo: coachingVideo }
        }}
        style={linkStyle}
      >
        <Play />
      </Link>
    </WorkoutSectionGrid>
  )
}

export default CoachingSection

const BlurUpImageGrid = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  overflow: hidden;
`

const CoachingImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
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
  z-index: 1;
  ${above.mobile`
    width: 80px;
  `}
  ${above.tablet`
    width: 120px;
  `}
`
