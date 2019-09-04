import React, { useContext } from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import SignUp from './SignUp'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useScreenWidthContext } from '../../context/ScreenWidthContext'
import { useFireBase } from '../Firebase/FirebaseContext'

const ChooseLoginMethod = ({ showNode, handleShowUsernamePasswordForm }) => {
  const device = useScreenWidthContext()
  const auth = useFireBase()

  const handleLoginWithGoogle = () => {
    auth
      .signInWithGoogleProviderPopUp()
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(error => {
        // const errorCode = error.code
        // const errorMessage = error.message
        // const email = error.email
        // const credential = error.credential
        console.log(error)
      })
  }

  const handleLoginWithFacebook = () => {
    auth
      .signInWithFacebookProviderPopUp()
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(error => {
        // const errorCode = error.code
        // const errorMessage = error.message
        // const email = error.email
        // const credential = error.credential
        console.log(error)
      })
  }

  return (
    <LoginFormTransition showNode={showNode}>
      <ButtonContainer>
        <BaseButton handleClick={handleShowUsernamePasswordForm}>
          Email & Password
        </BaseButton>
        <BaseButton handleClick={handleLoginWithGoogle}>
          Sign In with Google
        </BaseButton>
        <BaseButton handleClick={handleLoginWithFacebook}>
          Sign In with Facebook
        </BaseButton>
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
