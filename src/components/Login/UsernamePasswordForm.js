import React from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import DidForgetPassword from './DidForgotPassword'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'

const LoginUsernamePassword = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleLoginSubmit = event => {
    event.preventDefault()

    console.log('Hit the API')
  }

  return (
    <>
      <LoginForm onSubmit={handleLoginSubmit}>
        <TextInput
          type="text"
          name="loginUsername"
          labelName="Username"
          labelFor="loginUsername"
          labelInstructions="Enter your username"
          labelError="Username can't be found"
          labelSuccess=""
          value={formState.usernameValue.value}
          valid={formState.usernameValue.valid}
          initial={formState.usernameOptions.initial}
          touched={formState.usernameOptions.touched}
          showInstructions={formState.usernameOptions.showInstructions}
          onChange={updateInputValues}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <TextInput
          type="text"
          name="loginPassword"
          labelName="Password"
          labelFor="loginPassword"
          labelInstructions="Enter your password"
          labelError="Password was incorrect"
          value={formState.passwordValue.value}
          valid={formState.passwordValue.valid}
          initial={formState.passwordOptions.initial}
          touched={formState.passwordOptions.touched}
          showInstructions={formState.passwordOptions.showInstructions}
          onChange={updateInputValues}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <BaseButton type="submit">Login</BaseButton>
      </LoginForm>
      <DidForgetPassword />
    </>
  )
}

export default LoginUsernamePassword

const LoginForm = styled.form`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  width: 100%;
`
