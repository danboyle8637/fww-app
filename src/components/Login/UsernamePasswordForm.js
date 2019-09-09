import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import DidForgetPassword from './DidForgotPassword'
import BackChip from '../Chips/BackChip'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { useFireBase } from '../../components/Firebase/FirebaseContext'

const LoginUsernamePassword = ({
  showNode,
  handleShowForgotPasswordForm,
  handleReverseUsernamePasswordForm,
  reverse
}) => {
  const auth = useFireBase()
  const [showDashboard, setShowDashboard] = useState(false)
  const [loginButtonValid, setLoginButtonValid] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  // Check for form valid and set correct error message
  useEffect(() => {
    const emailValid = formState.emailValue.valid
    const passwordValid = formState.passwordValue.valid

    if (!emailValid) {
      setEmailErrorMessage('Please enter a valid email')
    }

    if (!passwordValid) {
      setPasswordErrorMessage('Must be over 6 characters')
    }

    if (emailValid && passwordValid) {
      setLoginButtonValid(true)
    }
  }, [
    formState.usernameValue.valid,
    formState.passwordValue.valid,
    dispatch,
    formState.emailValue.valid
  ])

  const handleLoginSubmit = event => {
    event.preventDefault()
    const email = formState.emailValue.value
    const password = formState.passwordValue.value

    auth.loginUserWithEmailAndPassword(email, password).catch(error => {
      if (error.code === 'auth/invalid-email') {
        // update error state and display to user
      } else if (error.code === 'auth/user-disabled') {
        // update error state and display to user
      } else if (error.code === 'auth/user-not-found') {
        // update error state and display to user
      } else if (error.code === 'auth/wrong-password') {
        // update error state and display to user
        setPasswordErrorMessage('Wrong password. Try again')
      } else {
        // something crazy happened. Should never hit this.
      }
    })

    // Empty the form state
    dispatch({ type: 'resetUsernamePasswordForm' })

    // Navigate to the Dashboard
    setShowDashboard(true)
  }

  return (
    <>
      {showDashboard ? (
        <Redirect to="/dashboard" />
      ) : (
        <LoginFormTransition
          showNode={showNode}
          reverse={reverse}
          formName="UsernamePasswordForm"
        >
          <FormContainer>
            <BackChip
              handleReverseUsernamePasswordForm={
                handleReverseUsernamePasswordForm
              }
            >
              Back
            </BackChip>
            <LoginForm onSubmit={handleLoginSubmit}>
              <TextInput
                type="text"
                name="emailAddress"
                labelName="Email"
                labelFor="emailAddress"
                labelInstructions="Enter your email address"
                labelError={emailErrorMessage}
                value={formState.emailValue.value}
                valid={formState.emailValue.valid}
                initial={formState.emailOptions.initial}
                touched={formState.emailOptions.touched}
                showInstructions={formState.emailOptions.showInstructions}
                onChange={updateInputValues}
                onFocus={updateInputOptions}
                onBlur={updateInputOptions}
              />
              <TextInput
                type="password"
                name="loginPassword"
                labelName="Password"
                labelFor="loginPassword"
                labelInstructions="Enter your password"
                labelError={passwordErrorMessage}
                value={formState.passwordValue.value}
                valid={formState.passwordValue.valid}
                initial={formState.passwordOptions.initial}
                touched={formState.passwordOptions.touched}
                showInstructions={formState.passwordOptions.showInstructions}
                onChange={updateInputValues}
                onFocus={updateInputOptions}
                onBlur={updateInputOptions}
              />
              <BaseButton
                disabled={!loginButtonValid}
                type="submit"
                handleClick={handleLoginSubmit}
              >
                {loginButtonValid ? 'Login' : 'Enter Your Info'}
              </BaseButton>
            </LoginForm>
            <DidForgetPassword
              handleShowForgotPasswordForm={handleShowForgotPasswordForm}
            />
          </FormContainer>
        </LoginFormTransition>
      )}
    </>
  )
}

export default LoginUsernamePassword

const FormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const LoginForm = styled.form`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  justify-items: center;
  width: 100%;
`
