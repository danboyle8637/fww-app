import React from 'react'
import styled from 'styled-components'

import CoachingSection from './CoachingSection'
import WorkoutSection from './WorkoutSection'
import WarmUpCoolDownSection from './WarmUpCoolDownSection'

const VideoSection = () => {
  return (
    <VideoContainer>
      <CoachingSection />
      <WorkoutSection />
      <WarmUpCoolDownSection />
    </VideoContainer>
  )
}

export default VideoSection

const VideoContainer = styled.div`
  padding: 0 16px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 8px;
  width: 100%;
`
