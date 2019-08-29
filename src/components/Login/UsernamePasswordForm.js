import React, { useEffect } from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import DidForgetPassword from './DidForgotPassword'
import BackChip from '../Chips/BackChip'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'

const LoginUsernamePassword = ({
  showNode,
  handleShowForgotPasswordForm,
  handleReverseUsernamePasswordForm,
  reverse
}) => {
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  useEffect(() => {
    const usernameValid = formState.usernameValue.valid
    const passwordValid = formState.passwordValue.valid

    if (usernameValid && passwordValid) {
      dispatch({ type: 'setFormValid' })
    }
  }, [formState.usernameValue.valid, formState.passwordValue.valid, dispatch])

  const handleLoginSubmit = event => {
    event.preventDefault()

    console.log('Hit the API')
  }

  return (
    <LoginFormTransition showNode={showNode} reverse={reverse}>
      <FormContainer>
        <BackChip
          handleReverseUsernamePasswordForm={handleReverseUsernamePasswordForm}
        >
          Back
        </BackChip>
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
            type="password"
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
          <BaseButton disabled={!formState.formValid.valid} type="submit">
            {formState.formValid.valid ? 'Login' : 'Enter Your Info'}
          </BaseButton>
        </LoginForm>
        <DidForgetPassword
          handleShowForgotPasswordForm={handleShowForgotPasswordForm}
        />
      </FormContainer>
    </LoginFormTransition>
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
