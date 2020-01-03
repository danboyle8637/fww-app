import React from 'react'
import styled from 'styled-components'

import ProgramProductFitnessLevelSection from './Footer/ProgramProductFitnessLevelSection'
import ProgramProductNumWorkoutsSection from './Footer/ProgramProductNumWorkoutsSection'
import ProgramProductDurationSection from './Footer/ProgramProductDurationSection'

const PurchaseProgramFooter = ({
  fitnessLevel,
  numberOfWorkouts,
  duration
}) => {
  return (
    <FooterContainer>
      <ProgramProductFitnessLevelSection fitnessLevel={fitnessLevel} />
      <ProgramProductNumWorkoutsSection numberOfWorkouts={numberOfWorkouts} />
      <ProgramProductDurationSection duration={duration} />
      <StipePurchaseButton>
        <ButtonContainerPulse />
        <PurchaseButtonContainer>
          <Price>7</Price>
        </PurchaseButtonContainer>
      </StipePurchaseButton>
    </FooterContainer>
  )
}

export default PurchaseProgramFooter

const FooterContainer = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 8px;
  align-items: center;
`

const StipePurchaseButton = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
`

const PurchaseButtonContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #666ee8;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  z-index: 2;
`

const ButtonContainerPulse = styled.div`
  background: rgba(102, 110, 232, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
`

const Price = styled.h4`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1;
  color: #f8f8f8;
  z-index: 3;
  &::before {
    position: absolute;
    content: '$';
    top: 0;
    left: 0;
    font-size: 18px;
    font-weight: 500;
    color: #f8f8f8;
  }
`
