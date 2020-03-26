import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import OptionsButton from '../Buttons/OptionsButton'

const SignUp = () => {
  const [toSignUp, setToSignUp] = useState(false)

  const handleGotoSignUp = () => {
    setToSignUp(true)
  }

  return (
    <>
      <SignUpContainer>
        <OptionsButton handleClick={handleGotoSignUp}>
          Create a Free Account!
        </OptionsButton>
      </SignUpContainer>
      {toSignUp ? <Redirect push to="/7-day-reset-step1" /> : null}
    </>
  )
}

export default SignUp

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

// const SignUpHeadline = styled.h4`
//   margin: 0 0 8px 0;
//   font-size: 18px;
//   color: ${props => props.theme.headlineSecondary};
//   letter-spacing: 0.1rem;
// `
