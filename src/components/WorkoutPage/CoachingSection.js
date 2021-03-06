import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import WorkoutLabelIndicator from '../Indicators/WorkoutLabelIndicator'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { above } from '../../styles/Theme'

const CoachingSection = ({
  coachingTinyBackground,
  coachingBackground,
  title,
  coachingUrl,
  coachingVideo
}) => {
  const imageRef = useRef(null)

  const [setNode, runAction] = useIntersectionObserver({
    rootMargin: '0px 0px 10px 0px',
    shouldUnobserve: true
  })

  useEffect(() => {
    const image = imageRef.current

    if (runAction) {
      image.src = image.dataset.src
      image.style.filter = 'blur(0px)'
    }
  }, [runAction])

  const linkStyle = {
    gridColumn: '1 / -1',
    gridRow: '1 / -1',
    alignSelf: 'center',
    justifySelf: 'center',
    textDecoration: 'none'
  }

  return (
    <WorkoutSectionGrid>
      <BlurUpImageGrid ref={setNode}>
        <CoachingImage
          ref={imageRef}
          src={coachingTinyBackground}
          data-src={coachingBackground}
          title={`${title} coaching video`}
          alt={`Learn how the ${title} is going to work.`}
        />
      </BlurUpImageGrid>
      <WorkoutLabelIndicator type={'coaching'} />
      <PlayLink
        to={{
          pathname: `${coachingUrl}/coaching`,
          state: { coachingVideo: coachingVideo }
        }}
        style={linkStyle}
      >
        <Play gradientId="coachingPlayButton" />
      </PlayLink>
    </WorkoutSectionGrid>
  )
}

export default CoachingSection

const BlurUpImageGrid = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  padding-top: calc(352 / 1200 * 100%);
  width: 100%;
  overflow: hidden;
`

const CoachingImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
  filter: blur(6px);
  transition: filter 1000ms ease-in-out;
`

const Play = styled(PlayButton)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 60px;
  ${above.mobile`
    width: 80px;
  `}
  ${above.tablet`
    width: 120px;
  `}
`

const PlayLink = styled(Link)`
  z-index: 4;
`
