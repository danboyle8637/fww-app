import React from 'react'
import styled from 'styled-components'

import HeaderRow from './HeaderRow'
import TrackingRow from './TrackingRow'

const TrackingChart = () => {
  return (
    <ChartContainer>
      <HeaderRow />
      <TrackingRow
        id="workoutGoal1"
        goal="How many pushups can you do from the ground on the last round?"
        date={'8/20/19'}
        numbers={14}
      />
      <TrackingRow
        id="workoutGoal2"
        goal="How many pushups can you do from the ground on the last round?"
        date={'8/20/19'}
        numbers={14}
      />
      <TrackingRow
        id="workoutGoal3"
        goal="How many pushups can you do from the ground on the last round?"
        date={'8/20/19'}
        numbers={14}
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
