import React from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import GoogleFacebookButton from '../Buttons/GoogleFacebookButton'
import SignUp from './SignUp'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFireBase } from '../Firebase/FirebaseContext'

const ChooseLoginMethod = ({
  showNode,
  handleShowUsernamePasswordForm,
  setShowDashboard
}) => {
  const auth = useFireBase()

  const handleLoginWithGoogle = () => {
    auth
      .signInWithGoogleProviderPopUp()
      .then(result => {
        const user = result.user
        console.log(user)
        setShowDashboard(true)
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
        setShowDashboard(true)
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
        <GoogleFacebookButton
          provider={'google'}
          handleClick={handleLoginWithGoogle}
        >
          Sign In with Google
        </GoogleFacebookButton>
        <GoogleFacebookButton handleClick={handleLoginWithFacebook}>
          Sign In with Facebook
        </GoogleFacebookButton>
        <SignUp />
      </ButtonContainer>
    </LoginFormTransition>
  )
}

export default ChooseLoginMethod

const ButtonContainer = styled.div`
  position: absolute;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 12px;
  width: 100%;
`
