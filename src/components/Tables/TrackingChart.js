import React from 'react'
import styled from 'styled-components'

import HeaderRow from './HeaderRow'
import TrackingRow from './TrackingRow'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'

const TrackingChart = ({ trackingGoal, workoutId }) => {
  // eslint-disable-next-line
  const [statsState, dispathStatsAction] = useWorkoutStatsContext()

  return (
    <ChartContainer>
      <HeaderRow />
      <TrackingRow
        id="workoutGoal1"
        goal={trackingGoal}
        date={statsState.stats[workoutId].trackingStats.first.date}
        numbers={statsState.stats[workoutId].trackingStats.first.number}
      />
      <TrackingRow
        id="workoutGoal2"
        goal={trackingGoal}
        date={statsState.stats[workoutId].trackingStats.second.date}
        numbers={statsState.stats[workoutId].trackingStats.second.number}
      />
      <TrackingRow
        id="workoutGoal3"
        goal={trackingGoal}
        date={statsState.stats[workoutId].trackingStats.third.date}
        numbers={statsState.stats[workoutId].trackingStats.third.number}
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
