import React from 'react'
import styled from 'styled-components'

import { above } from '../../styles/Theme'

const WhatYouGetSection = ({ benefits }) => {
  const benefitList = benefits.map(benefit => {
    const { id, text } = benefit
    return <BenefitItem key={id}>{text}</BenefitItem>
  })

  return (
    <BenefitsContainer>
      <BenefitsHeadline>Program Includes:</BenefitsHeadline>
      <BenefitList>{benefitList}</BenefitList>
    </BenefitsContainer>
  )
}

export default WhatYouGetSection

const BenefitsContainer = styled.div`
  padding: 0 24px;
`

const BenefitsHeadline = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.headlinePrimary};
  ${above.mobile`
    font-size: 34px;
  `}
`

const BenefitList = styled.ul`
  margin: 20px 0 0 0;
  list-style: none;
`

const BenefitItem = styled.li`
  position: relative;
  margin: 0 0 20px 20px;
  padding: 0;
  font-size: 15px;
  line-height: 1.8;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: ${props => props.theme.secondaryAccent};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transform: translate(-150%, 36%);
  }
`
