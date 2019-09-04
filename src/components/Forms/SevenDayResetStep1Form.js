import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import RadioInput from '../Forms/Inputs/RadioInput'
import BaseButton from '../Buttons/BaseButton'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { above } from '../../styles/Theme'

const SevenDayResetStep1Form = () => {
  const [formButtonActive, setFormButtonActive] = useState(false)
  const [formState, dispatch] = useFormStore()
  const [updateInputValue, updateInputOptions] = useFormControls()

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

  return (
    <Step1Form>
      <RadioInput
        type="radio"
        name="biggestObstacle"
        labelName="1. What is your biggest obstacle?"
        value={formState.biggestObstacleValue.value}
        options={formState.biggestObstacleValue.options}
        updateInputValue={updateInputValue}
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
        onChange={updateInputValue}
        onFocus={updateInputOptions}
        onBlur={updateInputOptions}
      />
      <TextInput
        type="text"
        name="emailAddress"
        labelName="email:"
        labelFor="emailAddress"
        labelInstructions="The email for your fit profile"
        labelError="Please use a valid email address..."
        value={formState.emailValue.value}
        valid={formState.emailValue.valid}
        initial={formState.emailOptions.initial}
        touched={formState.emailOptions.touched}
        showInstructions={formState.emailOptions.showInstructions}
        onChange={updateInputValue}
        onFocus={updateInputOptions}
        onBlur={updateInputOptions}
      />
      <BaseButton disabled={formButtonActive} type="submit">
        Step 2: Select Program
      </BaseButton>
    </Step1Form>
  )
}

export default SevenDayResetStep1Form

const Step1Form = styled.form`
  margin: 60px 0 0 0;
  padding: 0 16px;
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
