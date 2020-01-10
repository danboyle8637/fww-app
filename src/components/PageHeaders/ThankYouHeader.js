import React from 'react'
import styled from 'styled-components'

import { above } from '../../styles/Theme'

const ThankYouHeader = ({ firstName, program }) => {
  return (
    <ContentContainer>
      <ThankYouHeadline>You Rock {firstName}!</ThankYouHeadline>
      <Text>
        It worked! <strong>Thank you for supporting Fit Women’s Weekly</strong>.
      </Text>
      <Text>
        {program} is part of your account.{' '}
        <strong>I’ve emailed you a receipt and a welcome email</strong>. It’s
        important you read that email so I can get you in the Facebook group.
      </Text>
      <Text>Let’s go get sweaty and strong!</Text>
    </ContentContainer>
  )
}

export default ThankYouHeader

const ContentContainer = styled.div`
  margin: 0 0 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
`

const ThankYouHeadline = styled.h1`
  font-size: 32px;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  ${above.tablet`
    font-size: 42px;
  `}
`

const Text = styled.p`
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  & strong {
    color: ${props => props.theme.strongBodyText};
  }
`
