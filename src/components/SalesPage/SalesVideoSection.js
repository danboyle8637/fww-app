import React from 'react'
import styled from 'styled-components'

import ProgramSalesPageHeader from '../PageHeaders/ProgramSalesPageHeader'
import VimeoPlayer from '../Shared/VimeoPlayer'
import ProgramDuration from '../Cards/Footer/ProgramProductDurationSection'
import ProgramNumberOfWorkouts from '../Cards/Footer/ProgramProductNumWorkoutsSection'
import ProgramFitnessLevel from '../Cards/Footer/ProgramProductFitnessLevelSection'
import { above } from '../../styles/Theme'

const SalesVideoSection = ({
  programId,
  tinyCoverImage,
  coverImage,
  salesVideo,
  fitnessLevel,
  numberOfWorkouts,
  duration
}) => {
  return (
    <HeaderContainer>
      <ProgramSalesPageHeader
        programId={programId}
        tinyCoverImage={tinyCoverImage}
        coverImage={coverImage}
      />
      <VideoWrapper>
        <VimeoPlayer videoId={salesVideo} />
      </VideoWrapper>
      <WorkoutStatsWrapper>
        <ProgramFitnessLevel fitnessLevel={fitnessLevel} />
        <ProgramNumberOfWorkouts numberOfWorkouts={numberOfWorkouts} />
        <ProgramDuration duration={duration} />
      </WorkoutStatsWrapper>
    </HeaderContainer>
  )
}

export default SalesVideoSection

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${above.tablet`
    align-items: start;
  `}
`

const VideoWrapper = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
`

const WorkoutStatsWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
