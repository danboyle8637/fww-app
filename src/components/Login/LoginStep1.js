import React from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import SignUp from './SignUp'

const LoginStep1 = () => {
  const handleShowUsernamePasswordForm = () => {
    console.log('Trigger animation to show username password form.')
  }

  return (
    <ButtonContainer>
      <BaseButton handleClick={handleShowUsernamePasswordForm}>
        Username & Password
      </BaseButton>
      <BaseButton>Sign In with Google</BaseButton>
      <BaseButton>Sign In with Facebook</BaseButton>
      <SignUp />
    </ButtonContainer>
  )
}

export default LoginStep1

const ButtonContainer = styled.div`
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 12px;
`
