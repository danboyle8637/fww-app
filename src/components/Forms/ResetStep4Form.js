import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Header1, BodyText } from '../../styles/Typography'
import TextInput from '../Forms/Inputs/TextInput'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import PasswordShowHideIndicator from '../Indicators/PasswordShowHideIndicator'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { useUserContext } from '../../context/UserContext'
import { usePortalContext } from '../../context/portalContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'
import { above } from '../../styles/Theme'

const ResetStep4Form = ({
  activeQuestion,
  setActiveQuestion,
  reverse,
  setReverse,
  setIsLoading,
  setShowSecurityLogin
}) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const password = String(formState.passwordValue.value)
    const confirmPassword = String(formState.confirmPasswordValue.value)

    const passwordsMatch = password === confirmPassword

    if (!passwordsMatch) {
      setPasswordErrorMessage(`Passwords don't match`)
    }
  }, [formState.confirmPasswordValue.value, formState.passwordValue.value])

  const handleBackClick = () => {
    setReverse(true)
    setActiveQuestion(prevValue => prevValue - 1)
  }

  const toggleShowPassword = () => setShowPassword(prevValue => !prevValue)

  const handleSignUpForm = event => {
    event.preventDefault()
    setShowPassword(false)
    setIsLoading(true)

    const firstName = formState.firstNameValue.value
    const biggestObstacle = formState.biggestObstacleValue.value
    const programId = formState.resetWorkoutValue.value
    const totalWorkouts = formState.resetWorkoutValue.options.find(
      option => option.value === programId
    )
    const email = formState.emailValue.value.toLowerCase()
    const password = formState.passwordValue.value
    const confirmPassword = formState.confirmPasswordValue.value

    auth
      .signUpUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const userId = userCredential.user.uid

        const signUpData = {
          userId: userId,
          programId: programId,
          totalWorkouts: totalWorkouts['numberOfWorkouts'],
          firstName: firstName,
          password: password,
          confirmPassword: confirmPassword,
          email: email,
          biggestObstacle: biggestObstacle
        }

        const convertKitData = {
          firstName: firstName,
          email: email,
          program: programId,
          biggestObstacle: biggestObstacle
        }
        // Call our Signup endpoint...
        const url = `${siteConfig.api.baseUrl}/sign-up`
        const convertKitUrl = `${siteConfig.api.baseUrl}/add-member-to-convertki`

        const signUp = fetch(url, {
          method: 'POST',
          body: JSON.stringify(signUpData)
        })

        const convertKit = fetch(convertKitUrl, {
          method: 'POST',
          body: JSON.stringify(convertKitData)
        })

        Promise.all([signUp, convertKit])
          .then(responseArray => {
            const promiseData = responseArray.map(element => element.json())
            return Promise.all(promiseData)
          })
          .then(dataArray => {
            const userData = dataArray[0]

            dispatchUserAction({
              type: 'setLoggedInUser',
              value: {
                firstName: userData.firstName,
                photoUrl: userData.photoUrl,
                programs: userData.programs
              }
            })

            const fwwUser = {
              firstName: userData.firstName,
              photoUrl: userData.photoUrl,
              programs: userData.programs
            }

            localStorage.setItem('fwwUser', JSON.stringify(fwwUser))

            setIsLoading(false)
            setShowSecurityLogin(true)
          })
          .catch(error => {
            // TODO you need to create a special error page... Look in Basecamp
            // TODO make sure you setIsLoading to false and redirect them...
            // TODO a special page where you can get their account set up.
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: error.message
            })
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <LoginFormTransition
        showNode={activeQuestion === 3}
        reverse={reverse}
        formName="ResetSignUpStep3Form"
      >
        <Step3Container>
          <BackChip handleClick={handleBackClick}>Back</BackChip>
          <ContentWrapper>
            <Header1>Last Step:</Header1>
            <BodyText>
              Check your email and create a password. Then click Create My
              Program.
            </BodyText>
          </ContentWrapper>
          <SignUpForm onSubmit={handleSignUpForm}>
            <TextInput
              type="text"
              name="emailAddress"
              labelName="Email"
              labelFor="emailAddress"
              labelInstructions="Check your email address"
              labelError="Enter a valid email"
              value={formState.emailValue.value}
              valid={formState.emailValue.valid}
              initial={formState.emailOptions.initial}
              touched={formState.emailOptions.touched}
              showInstructions={formState.emailOptions.showInstructions}
              onChange={updateInputValues}
              onFocus={updateInputOptions}
              onBlur={updateInputOptions}
            />
            <PasswordShowHideIndicator
              showPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
            />
            <TextInput
              type={showPassword ? 'text' : 'password'}
              name="loginPassword"
              labelName="Password"
              labelFor="loginPassword"
              labelInstructions="Create a password"
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
            <TextInput
              type={showPassword ? 'text' : 'password'}
              name="loginConfirmPassword"
              labelName="Confirm Password"
              labelFor="loginConfirmPassword"
              labelInstructions="Confirm password"
              labelError={passwordErrorMessage}
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
            <BaseButton type="submit">Create My Program</BaseButton>
          </SignUpForm>
        </Step3Container>
      </LoginFormTransition>
    </>
  )
}

export default ResetStep4Form

const Step3Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0 0 320px 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${above.mobile`
    margin: 0 0 460px 60px;
    width: 60%;
  `}
  ${above.tablet`
    margin: 0 0 0 60px;
    width: 60%;
  `}
  ${above.ipadPro`
    margin: 0 0 80px 120px;
    width: 50%;
  `}
`

const SignUpForm = styled.form`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, auto);
  gap: 20px;
  justify-items: center;
  width: 100%;
`

const ContentWrapper = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 12px;
  justify-items: start;
  width: 100%;
`
