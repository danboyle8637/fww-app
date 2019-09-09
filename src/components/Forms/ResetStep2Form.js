import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import CardRadioInput from '../Forms/Inputs/CardRadioInput'
import BackChip from '../Chips/BackChip'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'

const ResetStep2Form = ({
  showNode,
  handleShowStep3,
  reverse,
  handleReverseStep2
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

  return (
    <LoginFormTransition
      showNode={showNode}
      reverse={reverse}
      formName="ResetSignUpStep2Form"
    >
      <Step2Container>
        <BackChip handleReverseStep2={handleReverseStep2}>Back</BackChip>
        <ProgramsForm>
          <CardRadioInput
            type="radio"
            name="chooseResetWorkout"
            value={formState.resetWorkoutValue.value}
            options={formState.resetWorkoutValue.options}
            updateInputValues={updateInputValues}
          />
        </ProgramsForm>
        <ButtonWrapper>
          <BaseButton
            disabled={!formButtonActive}
            handleClick={handleShowStep3}
          >
            {formButtonActive
              ? 'Step 3: Setup Login Method'
              : 'Click to Choose a Program'}
          </BaseButton>
        </ButtonWrapper>
      </Step2Container>
    </LoginFormTransition>
  )
}

export default ResetStep2Form

const Step2Container = styled.div`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProgramsForm = styled.form`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
`

const ButtonWrapper = styled.div`
  margin: 40px 0 0 0;
  width: 100%;
`
