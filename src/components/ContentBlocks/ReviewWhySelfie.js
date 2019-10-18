import React from 'react'
import styled from 'styled-components'

import { Header5 } from '../../styles/Typography'

const ReviewWhySelfie = () => {
  return (
    <WhyContainer>
      <Header5>Why Selfie?</Header5>
      <InstructionText>
        So if we use your review, people will know it came from a real person
        and it wasn't made up. Thank you so much!
      </InstructionText>
    </WhyContainer>
  )
}

export default ReviewWhySelfie

const WhyContainer = styled.div`
  margin: 30px 0 0 0;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  background: ${props => props.theme.baseBackgroundColor};
  border-radius: 10px;
`

const InstructionText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: ${props => props.theme.bodyText};
`
