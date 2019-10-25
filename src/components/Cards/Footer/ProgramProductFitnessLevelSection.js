import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FooterCircleIcon from './FooterCircleIcon'

const ProgramProductFitnessLevelSection = ({ fitnessLevel }) => {
  const [fitnessLevelArray, setFitnessLevelArray] = useState([])

  useEffect(() => {
    if (fitnessLevel === 'beginner') {
      setFitnessLevelArray([true, false, false])
    } else if (fitnessLevel === 'intermediate') {
      setFitnessLevelArray([true, true, false])
    } else {
      setFitnessLevelArray([true, true, true])
    }
  }, [fitnessLevel])

  return (
    <SectionContainer>
      <FooterLabel>Fit Level</FooterLabel>
      <FitnessLevelDotWrapper>
        <FooterCircleIcon active={fitnessLevelArray[0]} fitnessLevel={true} />
        <FooterCircleIcon active={fitnessLevelArray[1]} fitnessLevel={true} />
        <FooterCircleIcon active={fitnessLevelArray[2]} fitnessLevel={true} />
      </FitnessLevelDotWrapper>
    </SectionContainer>
  )
}

export default ProgramProductFitnessLevelSection

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
`

const FooterLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 12px;
  color: ${props => props.theme.footerAddressText};
  text-transform: uppercase;
`

const FitnessLevelDotWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`
