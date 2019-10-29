import React from 'react'
import styled from 'styled-components'

import HeaderRow from './HeaderRow'
import TrackingRow from './TrackingRow'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'

const TrackingChart = ({ trackingGoal, workoutId }) => {
  // eslint-disable-next-line
  const [statsState, dispathStatsAction] = useWorkoutStatsContext()

  const data = Object.keys(statsState.stats[workoutId].trackingStats)

  return (
    <ChartContainer>
      <HeaderRow />
      <TrackingRow
        id="workoutGoal1"
        goal={trackingGoal}
        date={
          data.length > 0
            ? statsState.stats[workoutId].trackingStats.first.date
            : null
        }
        numbers={
          data.length > 0
            ? statsState.stats[workoutId].trackingStats.first.number
            : null
        }
      />
      <TrackingRow
        id="workoutGoal2"
        goal={trackingGoal}
        date={
          data.length > 1
            ? statsState.stats[workoutId].trackingStats.second.date
            : null
        }
        numbers={
          data.length > 1
            ? statsState.stats[workoutId].trackingStats.second.number
            : null
        }
      />
      <TrackingRow
        id="workoutGoal3"
        goal={trackingGoal}
        date={
          data.length > 2
            ? statsState.stats[workoutId].trackingStats.third.date
            : null
        }
        numbers={
          data.length > 2
            ? statsState.stats[workoutId].trackingStats.third.number
            : null
        }
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
