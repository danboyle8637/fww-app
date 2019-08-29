import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { FirebaseContext } from '../Firebase/FirebaseContext'

const CreateAccountForm = () => {
  const firebase = useContext(FirebaseContext)
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()
  const [toDashboard, setToDashboard] = useState(false)

  const handleSignUpForm = event => {
    event.preventDefault()

    const email = formState.emailValue.value
    const password = formState.passwordValue.value

    firebase
      .signUpUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User created')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      {toDashboard ? (
        <Redirect to="/dashboard" />
      ) : (
        <FormContainer>
          <SignUpForm onSubmit={handleSignUpForm}>
            <TextInput
              type="text"
              name="signupFirstName"
              labelName="First Name"
              labelFor="signupFirstName"
              labelInstructions="Enter your first name"
              labelError="Enter your first name"
              value={formState.signupFirstNameValue.value}
              valid={formState.signupFirstNameValue.valid}
              initial={formState.signupFirstNameOptions.initial}
              touched={formState.signupFirstNameOptions.touched}
              showInstructions={
                formState.signupFirstNameOptions.showInstructions
              }
              onChange={updateInputValues}
              onFocus={updateInputOptions}
              onBlur={updateInputOptions}
            />
            <TextInput
              type="text"
              name="emailAddress"
              labelName="Email"
              labelFor="emailAddress"
              labelInstructions="Enter your email address"
              labelError="Enter a valid email address"
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
              type="text"
              name="loginUsername"
              labelName="Username"
              labelFor="loginUsername"
              labelInstructions="Create a unique username"
              labelError="ERROR MESSAGE FROM SERVER"
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
              labelInstructions="Create a password"
              labelError="ERROR MESSAGE FROM SERVER"
              value={formState.passwordValue.value}
              valid={formState.passwordValue.valid}
              initial={formState.passwordOptions.initial}
              touched={formState.passwordOptions.touched}
              showInstructions={formState.passwordOptions.showInstructions}
              onChange={updateInputValues}
              onFocus={updateInputOptions}
              onBlur={updateInputOptions}
            />
            <TextInput
              type="text"
              name="loginConfirmPassword"
              labelName="Confirm Password"
              labelFor="loginConfirmPassword"
              labelInstructions="Confirm password"
              labelError="ERROR MESSAGE FROM SERVER"
              value={formState.confirmPasswordValue.value}
              valid={formState.confirmPasswordValue.valid}
              initial={formState.confirmPasswordOptions.initial}
              touched={formState.confirmPasswordOptions.touched}
              showInstructions={
                formState.confirmPasswordOptions.showInstructions
              }
              onChange={updateInputValues}
              onFocus={updateInputOptions}
              onBlur={updateInputOptions}
            />
            <BaseButton type="submit">Create Fit Profile</BaseButton>
          </SignUpForm>
        </FormContainer>
      )}
    </>
  )
}

export default CreateAccountForm

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const SignUpForm = styled.form`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, auto);
  gap: 20px;
  justify-items: center;
  width: 100%;
`
