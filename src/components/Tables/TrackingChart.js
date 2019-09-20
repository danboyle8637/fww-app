import React from 'react'
import styled from 'styled-components'

import HeaderRow from './HeaderRow'
import TrackingRow from './TrackingRow'

const TrackingChart = ({ trackingGoal, trackingStats }) => {
  const { first, second, third } = trackingStats

  // TODO Create a placeholder for the chart if there is no data available
  return (
    <ChartContainer>
      <HeaderRow />
      <TrackingRow
        id="workoutGoal1"
        goal={trackingGoal}
        date={first.timestamp}
        numbers={first.number}
      />
      <TrackingRow
        id="workoutGoal2"
        goal={trackingGoal}
        date={second.timestamp}
        numbers={second.number}
      />
      <TrackingRow
        id="workoutGoal3"
        goal={trackingGoal}
        date={third.timestamp}
        numbers={third.number}
      />
    </ChartContainer>
  )
}

export default TrackingChart

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 45rem;
`
