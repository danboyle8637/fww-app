import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'

const ForgetPasswordForm = ({
  showNode,
  handleReverseForgotPasswordForm,
  reverse
}) => {
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()
  const [
    emailNewPasswordButtonValid,
    setEmailNewPasswordButtonValid
  ] = useState(false)

  useEffect(() => {
    const emailValid = formState.emailValue.valid

    if (emailValid) {
      setEmailNewPasswordButtonValid(true)
    }
  }, [formState.emailValue.valid])

  const handleResetPassword = event => {
    event.preventDefault()

    console.log('Hit the API.')
  }

  return (
    <LoginFormTransition showNode={showNode} reverse={reverse}>
      <ResetPasswordContainer>
        <BackChip
          handleReverseForgotPasswordForm={handleReverseForgotPasswordForm}
        >
          Back
        </BackChip>
        <ResetPasswordForm onSubmit={handleResetPassword}>
          <TextInput
            type="text"
            name="emailAddress"
            labelName="Email"
            labelFor="emailAddress"
            labelInstructions="Enter your email address"
            labelError="Enter a valid email address"
            labelSuccess="Go check your email!"
            value={formState.emailValue.value}
            valid={formState.emailValue.valid}
            initial={formState.emailOptions.initial}
            touched={formState.emailOptions.touched}
            showInstructions={formState.emailOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
          <BaseButton disabled={!emailNewPasswordButtonValid} type="submit">
            {emailNewPasswordButtonValid
              ? 'Send New Password'
              : 'Enter Email Address'}
          </BaseButton>
        </ResetPasswordForm>
      </ResetPasswordContainer>
    </LoginFormTransition>
  )
}

export default ForgetPasswordForm

const ResetPasswordContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ResetPasswordForm = styled.form`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  justify-items: center;
  width: 100%;
`
