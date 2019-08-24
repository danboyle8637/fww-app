import React from 'react'
import styled from 'styled-components'

import WorkoutCompletedSection from './WorkoutCompletedSection'
import WorkoutFavoriteSection from './WorkoutFavoriteSection'

const WorkoutStatsSection = () => {
  return (
    <SectionContainer>
      <WorkoutCompletedSection />
      <WorkoutFavoriteSection />
    </SectionContainer>
  )
}

export default WorkoutStatsSection

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
`
