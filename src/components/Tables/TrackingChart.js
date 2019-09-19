import React from 'react'
import styled from 'styled-components'

import HeaderRow from './HeaderRow'
import TrackingRow from './TrackingRow'

const TrackingChart = ({ trackingGoal, trackingStats }) => {
  const { trackingStats1, trackingStats2, trackingStats3 } = trackingStats

  // TODO Create a placeholder for the chart if there is no data available
  return (
    <ChartContainer>
      <HeaderRow />
      <TrackingRow
        id="workoutGoal1"
        goal={trackingGoal}
        date={trackingStats1.timestamp}
        numbers={trackingStats1.number}
      />
      <TrackingRow
        id="workoutGoal2"
        goal={trackingGoal}
        date={trackingStats2.timestamp}
        numbers={trackingStats2.number}
      />
      <TrackingRow
        id="workoutGoal3"
        goal={trackingGoal}
        date={trackingStats3.timestamp}
        numbers={trackingStats3.number}
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
