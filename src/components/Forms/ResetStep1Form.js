import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Header1, BodyText } from '../../styles/Typography'
import TextInput from '../Forms/Inputs/TextInput'
import RadioInput from '../Forms/Inputs/RadioInput'
import BaseButton from '../Buttons/BaseButton'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { above } from '../../styles/Theme'

const ResetStep1Form = ({ activeQuestion, setActiveQuestion, setReverse }) => {
  const [formButtonActive, setFormButtonActive] = useState(false)
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  useEffect(() => {
    if (
      formState.biggestObstacleValue.valid &&
      formState.firstNameValue.valid &&
      formState.emailValue.valid
    ) {
      setFormButtonActive(true)
    } else {
      setFormButtonActive(false)
    }
  }, [
    formState.biggestObstacleValue.valid,
    formState.firstNameValue.valid,
    formState.emailValue.valid
  ])

  const handleButtonPress = event => {
    event.preventDefault()
    setReverse(false)
    setActiveQuestion(prevValue => prevValue + 1)
  }

  return (
    <LoginFormTransition
      showNode={activeQuestion === 0}
      formName="ResetSignUpStep1Form"
    >
      <Step1Container>
        <ContentWrapper>
          <Header1>Step 1:</Header1>
          <BodyText>
            Let's focus on your biggest obstacle first. Solve this and
            everything else falls into place.
          </BodyText>
        </ContentWrapper>
        <Step1Form onSubmit={handleButtonPress}>
          <RadioInput
            type="radio"
            name="biggestObstacle"
            labelName="1. What's your biggest obstacle?"
            value={formState.biggestObstacleValue.value}
            options={formState.biggestObstacleValue.options}
            updateInputValue={updateInputValues}
          />
          <TextInput
            type="text"
            name="firstName"
            labelName="name:"
            labelFor="firstName"
            labelInstructions="Only your first name..."
            labelError="Need at least two characters..."
            value={formState.firstNameValue.value}
            valid={formState.firstNameValue.valid}
            initial={formState.firstNameOptions.initial}
            touched={formState.firstNameOptions.touched}
            showInstructions={formState.firstNameOptions.showInstructions}
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
          <BaseButton type="submit" disabled={!formButtonActive}>
            {formButtonActive
              ? 'Step 2: Select Program'
              : 'Fill Out Entire Form'}
          </BaseButton>
        </Step1Form>
      </Step1Container>
    </LoginFormTransition>
  )
}

export default ResetStep1Form

const Step1Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0 0 340px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 10px;
  ${above.mobile`
    margin: 0 0 460px 60px;
    width: 60%;
  `}
  ${above.ipadPro`
    margin: 0 0 80px 120px;
    width: 50%;
  `}
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 12px;
  justify-items: start;
  width: 100%;
`
