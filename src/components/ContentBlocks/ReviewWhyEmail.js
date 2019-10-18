import React from 'react'
import styled from 'styled-components'

import { Header5 } from '../../styles/Typography'

const ReviewWhyEmail = () => {
  return (
    <WhyContainer>
      <Header5>Why Email?</Header5>
      <InstructionText>
        Your email is optional. If you leave it, I'll only use it to email you
        personally so we can talk more about your review. It does help. Thanks!
      </InstructionText>
    </WhyContainer>
  )
}

export default ReviewWhyEmail

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
