import React from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'

const ForgetPasswordForm = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleResetPassword = event => {
    event.preventDefault()

    console.log('Hit the API.')
  }

  return (
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
      <BaseButton type="submit">Send New Password</BaseButton>
    </ResetPasswordForm>
  )
}

export default ForgetPasswordForm

const ResetPasswordForm = styled.form`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  width: 100%;
`
