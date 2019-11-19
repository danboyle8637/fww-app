import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import HeaderRow from './HeaderRow'
import TrackingRow from './TrackingRow'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'

const TrackingChart = ({ trackingGoal, programId, workoutId }) => {
  // eslint-disable-next-line
  const [statsState, dispathStatsAction] = useWorkoutStatsContext()
  const [trackingArrayLength, setTrackingArrayLength] = useState([])

  const programStats = statsState[programId]
  const data = Object.keys(programStats[workoutId].trackingStats)

  useEffect(() => {
    const legnth = data.length
    setTrackingArrayLength(legnth)
  }, [data])

  return (
    <ChartContainer>
      <HeaderRow />
      <TrackingRow
        id="workoutGoal1"
        goal={trackingGoal}
        date={
          trackingArrayLength > 0
            ? programStats[workoutId].trackingStats.first.date
            : null
        }
        numbers={
          trackingArrayLength > 0
            ? programStats[workoutId].trackingStats.first.number
            : null
        }
      />
      <TrackingRow
        id="workoutGoal2"
        goal={trackingGoal}
        date={
          trackingArrayLength > 1
            ? programStats[workoutId].trackingStats.second.date
            : null
        }
        numbers={
          trackingArrayLength > 1
            ? programStats[workoutId].trackingStats.second.number
            : null
        }
      />
      <TrackingRow
        id="workoutGoal3"
        goal={trackingGoal}
        date={
          trackingArrayLength > 2
            ? programStats[workoutId].trackingStats.third.date
            : null
        }
        numbers={
          trackingArrayLength > 2
            ? programStats[workoutId].trackingStats.third.number
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
