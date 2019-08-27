import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import TextButton from '../Buttons/TextButton'

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpHeadline>Don't have an account?</SignUpHeadline>
      <Link to="/signup">
        <TextButton>Create a Free Account</TextButton>
      </Link>
    </SignUpContainer>
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
  margin: 0 0 16px 0;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
  letter-spacing: 0.1rem;
`
