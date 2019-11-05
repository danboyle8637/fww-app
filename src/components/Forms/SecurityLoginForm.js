import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import PasswordShowHideIndicator from '../Indicators/PasswordShowHideIndicator'
import { usePortalContext } from '../../context/portalContext'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { useFireBase } from '../Firebase/FirebaseContext'
import { above } from '../../styles/Theme'

const SecurityLoginForm = ({ setIsLoggingIn, setShowDashboard }) => {
  const auth = useFireBase()
  const [loginButtonValid, setLoginButtonValid] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  useEffect(() => {
    const emailValid = formState.emailValue.valid
    const passwordValid = formState.passwordValue.valid

    if (!emailValid) {
      setEmailErrorMessage('Enter a valid email')
    }

    if (!passwordValid) {
      setPasswordErrorMessage('Must be over 6 chars')
    }

    if (emailValid && passwordValid) {
      setLoginButtonValid(true)
    }
  }, [formState.emailValue.valid, formState.passwordValue.valid])

  const handleSecurityLogin = event => {
    event.preventDefault()
    setShowPassword(false)
    setIsLoggingIn(true)

    const email = formState.emailValue.value
    const password = formState.passwordValue.value

    auth
      .loginUserWithEmailAndPassword(email, password)
      .then(() => {
        auth.isAuthenticated = true

        dispatchFormAction({ type: 'resetEmailPasswordForm' })
        setShowDashboard(true)
      })
      .catch(() => {
        dispatchPortalAction({
          type: 'toggleErrorMessage',
          value: `Couldn't log you in. It's not your fault. It's probably a connection issue. Refresh the page and try again.`
        })
      })
  }

  const toggleShowPassword = () => {
    setShowPassword(prevValue => !prevValue)
  }

  return (
    <FormContainer>
      <PasswordShowHideIndicator
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
      />
      <LoginForm onSubmit={handleSecurityLogin}>
        <TextInput
          type="text"
          name="emailAddress"
          labelName="Email"
          labelFor="emailAddress"
          labelInstructions="Check your email address"
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
          type={showPassword ? 'text' : 'password'}
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
        <BaseButton disabled={!loginButtonValid} type="submit">
          {loginButtonValid ? "Let's Workout!" : 'Enter Password'}
        </BaseButton>
      </LoginForm>
    </FormContainer>
  )
}

export default SecurityLoginForm

const FormContainer = styled.div`
  margin: 160px 0 0 0;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.mainBackgroundColor};
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  width: 100%;
  ${above.mobile`
    margin: 60px 0 0 0;
    width: 50%;
  `}
  ${above.tablet`
    margin: 20px 0 0 0;
    width: 50%;
  `}
  ${above.ipadPro`
    width: 42%;
  `}
`

const LoginForm = styled.form`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  justify-items: center;
  width: 100%;
`
