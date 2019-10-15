import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Header1, BodyText } from '../../styles/Typography'
import BaseButton from '../Buttons/BaseButton'
import CardRadioInput from '../Forms/Inputs/CardRadioInput'
import BackChip from '../Chips/BackChip'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { above } from '../../styles/Theme'

const ResetStep2Form = ({
  activeQuestion,
  setActiveQuestion,
  reverse,
  setReverse
}) => {
  const [formButtonActive, setFormButtonActive] = useState(false)
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  // eslint-disable-next-line
  const [updateInputValues, updateInputOptions] = useFormControls()

  useEffect(() => {
    if (formState.resetWorkoutValue.valid) {
      setFormButtonActive(true)
    } else {
      setFormButtonActive(false)
    }
  }, [formState.resetWorkoutValue.valid])

  const handleBackClick = () => {
    setReverse(true)
    setActiveQuestion(prevValue => prevValue - 1)
  }

  const handleButtonPress = event => {
    event.preventDefault()
    setReverse(false)
    setActiveQuestion(prevValue => prevValue + 1)
  }

  return (
    <LoginFormTransition
      showNode={activeQuestion === 1}
      reverse={reverse}
      formName="ResetSignUpStep2Form"
    >
      <Step2Container>
        <BackChip handleClick={handleBackClick}>Back</BackChip>
        <ContentWrapper>
          <Header1>Step 2:</Header1>
          <BodyText>
            Choose your Reset Program based on your fitness level. Just click
            the program to select it.
          </BodyText>
        </ContentWrapper>
        <ProgramsForm onSubmit={handleButtonPress}>
          <CardRadioInput
            type="radio"
            name="chooseResetWorkout"
            value={formState.resetWorkoutValue.value}
            options={formState.resetWorkoutValue.options}
            updateInputValues={updateInputValues}
            signUpCard={true}
          />
          <ButtonWrapper>
            <BaseButton type="submit" disabled={!formButtonActive}>
              {formButtonActive
                ? 'Step 3: Setup Login Method'
                : 'Click to Choose a Program'}
            </BaseButton>
          </ButtonWrapper>
        </ProgramsForm>
      </Step2Container>
    </LoginFormTransition>
  )
}

export default ResetStep2Form

const Step2Container = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProgramsForm = styled.form`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 30px;
`

const ButtonWrapper = styled.div`
  margin: 40px 0 0 0;
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
