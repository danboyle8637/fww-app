import React from 'react'
import styled from 'styled-components'

import WorkoutCompletedDots from './WorkoutCompletedDots'

const WorkoutCompletedSection = ({ completed }) => {
  return (
    <CompletedContainer>
      <FooterLabel>Completed</FooterLabel>
      <WorkoutCompletedDots completed={completed} />
    </CompletedContainer>
  )
}

export default WorkoutCompletedSection

const CompletedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 4px;
  justify-items: center;
`

const FooterLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 12px;
  color: ${props => props.theme.footerAddressText};
  text-transform: uppercase;
`
