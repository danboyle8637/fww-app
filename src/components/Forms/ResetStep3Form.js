import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { FirebaseContext } from '../Firebase/FirebaseContext'

const ResetStep3Form = ({ showNode, reverse, handleReverseStep3 }) => {
  const auth = useContext(FirebaseContext)
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()
  const [toDashboard, setToDashboard] = useState(false)

  const handleSignUpForm = event => {
    event.preventDefault()

    const firstName = formState.signupFirstNameValue.value
    // const biggestObstacle = formState.biggestObstacleValue.value
    const program = formState.resetWorkoutValue.value
    const email = formState.emailValue.value
    const username = formState.usernameValue.value
    const password = formState.passwordValue.value
    const confirmPassword = formState.confirmPasswordValue.value

    auth
      .signUpUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const userId = userCredential.user.uid

        const signUpData = {
          userId: userId,
          program: program,
          totalWorkouts: 5,
          firstName: firstName,
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          email: email
        }
        // Call our Signup endpoint...
        const url = `http://localhost:5000/sign-up`
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(signUpData),
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(JSON.stringify(data))
            setToDashboard(true)
          })
          .catch(error => {
            if (error) {
              console.log(error)
            }
          })
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
        <LoginFormTransition
          showNode={showNode}
          reverse={reverse}
          formName="ResetSignUpStep3Form"
        >
          <Step3Container>
            <BackChip handleReverseStep3={handleReverseStep3}>Back</BackChip>
            <SignUpForm onSubmit={handleSignUpForm}>
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
          </Step3Container>
        </LoginFormTransition>
      )}
    </>
  )
}

export default ResetStep3Form

const Step3Container = styled.div`
  margin: 20px 0 0 0;
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
