import React from 'react'
import styled from 'styled-components'

import ProgramProgressLoader from './ProgramProgressLoader'

const ProgramProgressSection = () => {
  return (
    <ProgressContainer>
      <ProgramProgressLoader />
      <ProgressLabel>Progress</ProgressLabel>
    </ProgressContainer>
  )
}

export default ProgramProgressSection

const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
`

const ProgressLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 14px;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
  text-decoration: none;
`
