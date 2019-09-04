import React from 'react'
import styled from 'styled-components'

const ProgramProductNumWorkoutsSection = ({ numberOfWorkouts }) => {
  return (
    <SectionContainer>
      <FooterLabel label="true">Workouts</FooterLabel>
      <FooterLabel>{numberOfWorkouts}</FooterLabel>
    </SectionContainer>
  )
}

export default ProgramProductNumWorkoutsSection

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
`

const FooterLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 12px;
  color: ${props =>
    props.label ? props.theme.footerAddressText : props.theme.primaryAccent};
  text-transform: uppercase;
`
