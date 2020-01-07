import React from 'react'
import styled from 'styled-components'

const WhatYouGetSection = ({ benefits }) => {
  const benefitList = benefits.map(benefit => {
    const { id, text } = benefit
    return <BenefitItem key={id}>{text}</BenefitItem>
  })

  return (
    <BenefitsContainer>
      <BenefitList>{benefitList}</BenefitList>
    </BenefitsContainer>
  )
}

export default WhatYouGetSection

const BenefitsContainer = styled.div`
  padding: 0 24px;
`

const BenefitList = styled.ul`
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
    transform: translate(-150%, 30%);
  }
`
