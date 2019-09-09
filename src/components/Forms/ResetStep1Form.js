import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import RadioInput from '../Forms/Inputs/RadioInput'
import BaseButton from '../Buttons/BaseButton'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { above } from '../../styles/Theme'

const ResetStep1Form = ({ showNode, handleShowStep2 }) => {
  const [formButtonActive, setFormButtonActive] = useState(false)
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  useEffect(() => {
    if (
      formState.biggestObstacleValue.valid &&
      formState.signupFirstNameValue.valid &&
      formState.emailValue.valid
    ) {
      setFormButtonActive(true)
    } else {
      setFormButtonActive(false)
    }
  }, [
    formState.biggestObstacleValue.valid,
    formState.signupFirstNameValue.valid,
    formState.emailValue.valid
  ])

  const handleButtonPress = event => {
    event.preventDefault()
    handleShowStep2()
  }

  return (
    <LoginFormTransition showNode={showNode} formName="ResetSignUpStep1Form">
      <Step1Container>
        <Step1Form>
          <RadioInput
            type="radio"
            name="biggestObstacle"
            labelName="1. What is your biggest obstacle?"
            value={formState.biggestObstacleValue.value}
            options={formState.biggestObstacleValue.options}
            updateInputValue={updateInputValues}
          />
          <TextInput
            type="text"
            name="signupFirstName"
            labelName="name:"
            labelFor="signupFirstName"
            labelInstructions="Only your first name..."
            labelError="Need at least two characters..."
            value={formState.signupFirstNameValue.value}
            valid={formState.signupFirstNameValue.valid}
            initial={formState.signupFirstNameOptions.initial}
            touched={formState.signupFirstNameOptions.touched}
            showInstructions={formState.signupFirstNameOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
          <TextInput
            type="text"
            name="emailAddress"
            labelName="email:"
            labelFor="emailAddress"
            labelInstructions="Enter email for fit profile"
            labelError="Please use a valid email address..."
            value={formState.emailValue.value}
            valid={formState.emailValue.valid}
            initial={formState.emailOptions.initial}
            touched={formState.emailOptions.touched}
            showInstructions={formState.emailOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
        </Step1Form>
        <BaseButton
          disabled={!formButtonActive}
          handleClick={handleButtonPress}
        >
          {formButtonActive ? 'Step 2: Select Program' : 'Fill Out Entire Form'}
        </BaseButton>
      </Step1Container>
    </LoginFormTransition>
  )
}

export default ResetStep1Form

const Step1Container = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 10px;
`

const Step1Form = styled.form`
  margin: 30px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  row-gap: 30px;
  width: 100%;
  ${above.mobile`
    max-width: 33rem;
  `}
  ${above.tablet`
    max-width: 44rem;
  `}
`
