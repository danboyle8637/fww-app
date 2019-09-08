import React from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import CardRadioInput from '../Forms/Inputs/CardRadioInput'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'

const ResetStep2Form = ({ showNode, handleShowStep3 }) => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  // eslint-disable-next-line
  const [updateInputValues, updateInputOptions] = useFormControls()

  return (
    <LoginFormTransition showNode={showNode}>
      <Step2Container>
        <ProgramsWrapper>
          <CardRadioInput
            type="radio"
            name="chooseResetWorkout"
            value={formState.resetWorkoutValue.value}
            options={formState.resetWorkoutValue.options}
            updateInputValues={updateInputValues}
          />
        </ProgramsWrapper>
        <BaseButton disabled={true} handleClick={handleShowStep3}>
          Step 3: Setup Login Method
        </BaseButton>
      </Step2Container>
    </LoginFormTransition>
  )
}

export default ResetStep2Form

const Step2Container = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 40px;
`

const ProgramsWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
`
