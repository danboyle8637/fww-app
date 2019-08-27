import React from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import SignUp from './SignUp'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'

const ChooseLoginMethod = ({ showNode, handleShowUsernamePasswordForm }) => {
  return (
    <LoginFormTransition showNode={showNode}>
      <ButtonContainer>
        <BaseButton handleClick={handleShowUsernamePasswordForm}>
          Username & Password
        </BaseButton>
        <BaseButton>Sign In with Google</BaseButton>
        <BaseButton>Sign In with Facebook</BaseButton>
        <SignUp />
      </ButtonContainer>
    </LoginFormTransition>
  )
}

export default ChooseLoginMethod

const ButtonContainer = styled.div`
  position: absolute;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 12px;
  width: 100%;
`
