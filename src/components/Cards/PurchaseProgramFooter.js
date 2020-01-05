import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { TweenMax, Linear } from 'gsap/TweenMax'

import ProgramProductFitnessLevelSection from './Footer/ProgramProductFitnessLevelSection'
import ProgramProductNumWorkoutsSection from './Footer/ProgramProductNumWorkoutsSection'
import ProgramProductDurationSection from './Footer/ProgramProductDurationSection'

const PurchaseProgramFooter = ({
  fitnessLevel,
  numberOfWorkouts,
  duration,
  price
}) => {
  const pulseRef = useRef(null)

  useEffect(() => {
    const pulse = pulseRef.current

    TweenMax.fromTo(
      pulse,
      1,
      {
        transformOrigin: '50% 50%',
        scale: 1
      },
      {
        transformOrigin: '50% 50%',
        scale: 1.3,
        ease: Linear.easeNone,
        yoyo: true,
        repeat: -1
      }
    )

    return () => {
      TweenMax.killTweensOf(pulse)
    }
  }, [])

  return (
    <FooterContainer>
      <ProgramProductFitnessLevelSection fitnessLevel={fitnessLevel} />
      <ProgramProductNumWorkoutsSection numberOfWorkouts={numberOfWorkouts} />
      <ProgramProductDurationSection duration={duration} />
      <StipePurchaseButton>
        <ButtonContainerPulse ref={pulseRef} />
        <PurchaseButtonContainer>
          <DollarSign>$</DollarSign>
          <Price>{price}</Price>
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
  grid-column: 1 / -1;
  grid-row: 1 / -1;
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
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background: rgba(102, 110, 232, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
`

const DollarSign = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 200;
  letter-spacing: 1;
  line-height: 1;
  color: #f8f8f8;
  transform: translateY(-4px);
  z-index: 3;
`

const Price = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1;
  line-height: 1;
  color: #f8f8f8;
  z-index: 3;
`
