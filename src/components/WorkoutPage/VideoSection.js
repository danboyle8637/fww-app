import React from 'react'
import styled from 'styled-components'

import CoachingSection from './CoachingSection'
import WorkoutSection from './WorkoutSection'
import WarmUpCoolDownSection from './WarmUpCoolDownSection'
import { above } from '../../styles/Theme'

const VideoSection = ({ workoutAssets, workoutVideoIds, name }) => {
  // TODO what happens when you have multiple workouts
  // And workout backgrounds
  const coachingBackground = workoutAssets.coachingBackground
  const workoutBackground1 = workoutAssets.workoutBackground1

  return (
    <VideoContainer>
      <CoachingSection name={name} coachingBackground={coachingBackground} />
      <WorkoutSection name={name} workoutBackground={workoutBackground1} />
      <WarmUpCoolDownSection />
    </VideoContainer>
  )
}

export default VideoSection

const VideoContainer = styled.div`
  margin: 10px 0 0 0;
  padding: 0 16px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 8px;
  width: 100%;
  ${above.ipadPro`
    padding: 0;
    background: ${props => props.theme.mainBackgroundBorderColor};
    gap: 0;
  `}
`
