import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import TextButton from '../Buttons/TextButton'

const SignUp = () => {
  const [toSignUp, setToSignUp] = useState(false)

  const handleGotoSignUp = () => {
    setToSignUp(true)
  }

  return (
    <>
      <SignUpContainer>
        <SignUpHeadline>Don't have an account?</SignUpHeadline>
        <TextButton handleClick={handleGotoSignUp}>
          Create a Free Account
        </TextButton>
      </SignUpContainer>
      {toSignUp ? <Redirect push to="/7-day-reset-step1" /> : null}
    </>
  )
}

export default SignUp

const SignUpContainer = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignUpHeadline = styled.h4`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
  letter-spacing: 0.1rem;
`
