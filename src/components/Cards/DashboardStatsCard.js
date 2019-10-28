// Holds progress and training plan
import React from 'react'
import styled from 'styled-components'

import DashboardProgressCard from './DashboardProgressCard'
import DashboardTrainingPlanCard from './DashboardTrainingPlanCard'

const DashboardStatsCard = ({ programId }) => {
  return (
    <CardContainer>
      <DashboardProgressCard programId={programId} />
      <DashboardTrainingPlanCard />
    </CardContainer>
  )
}

export default DashboardStatsCard

const CardContainer = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  width: 100%;
  max-width: 500px;
`
