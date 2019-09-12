import React from 'react'
import styled from 'styled-components'

import HeaderRow from './HeaderRow'
import TrackingRow from './TrackingRow'

const TrackingChart = () => {
  return (
    <ChartContainer>
      <HeaderRow />
      <TrackingRow
        goal="How many pushups can you do from the ground on the last round?"
        date={'8/20/19'}
        numbers={14}
      />
      <TrackingRow
        goal="How many pushups can you do from the ground on the last round?"
        date={'8/20/19'}
        numbers={14}
      />
      <TrackingRow
        goal="How many pushups can you do from the ground on the last round?"
        date={'8/20/19'}
        numbers={14}
      />
    </ChartContainer>
  )
}

export default TrackingChart

const ChartContainer = styled.div`
  margin: 60px 0 0 0;
  padding: 0 16px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 45rem;
`
