import React from 'react'
import styled from 'styled-components'

import ProgressLoader from '../../../svgs/ProgressLoader'

const ProgramProgressSection = ({ percentComplete }) => {
  return (
    <ProgressContainer>
      <ProgressGraph />
      <PercentNumber>{`${percentComplete}%`}</PercentNumber>
    </ProgressContainer>
  )
}

export default ProgramProgressSection

const ProgressContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
`

const ProgressGraph = styled(ProgressLoader)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 54px;
`

const PercentNumber = styled.p`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  font-family: QuicksandSemiBold;
  font-size: 11px;
  color: ${props => props.theme.primaryAccent};
  z-index: 1;
`
