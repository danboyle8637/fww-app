import React from 'react'
import styled from 'styled-components'

import ProgramProductFitnessLevelSection from './Footer/ProgramProductFitnessLevelSection'
import ProgramProductNumWorkoutsSection from './Footer/ProgramProductNumWorkoutsSection'
import ProgramProdcutDurationSection from './Footer/ProgramProductDurationSection'
import NavigationArrow from '../Shared/NavigationArrow'

const ProgramProductCardFooter = ({
  fitnessLevel,
  numberOfWorkouts,
  duration
}) => {
  return (
    <FooterContainer>
      <ProgramProductFitnessLevelSection fitnessLevel={fitnessLevel} />
      <ProgramProductNumWorkoutsSection numberOfWorkouts={numberOfWorkouts} />
      <ProgramProdcutDurationSection duration={duration} />
      <NavigationArrow />
    </FooterContainer>
  )
}

export default ProgramProductCardFooter

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 8px;
  align-items: center;
`
