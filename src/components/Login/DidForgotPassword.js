import React from 'react'
import styled from 'styled-components'

import TextButton from '../Buttons/TextButton'

const DidForgotPassword = ({ handleShowForgotPasswordForm }) => {
  return (
    <ForgotPasswordContainer>
      <ForgotPasswordHeadline>Forgot password?</ForgotPasswordHeadline>
      <TextButton handleClick={handleShowForgotPasswordForm}>
        Send reminder
      </TextButton>
    </ForgotPasswordContainer>
  )
}

export default DidForgotPassword

const ForgotPasswordContainer = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ForgotPasswordHeadline = styled.h4`
  margin: 0 0 16px 0;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
  letter-spacing: 0.1rem;
`
