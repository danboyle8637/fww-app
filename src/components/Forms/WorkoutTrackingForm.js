import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import WiggleButton from '../Buttons/WiggleButton'
import {
  WorkoutPageHeadline,
  WorkoutPageDescription
} from '../../styles/Typography'
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'

const WorkoutTrackingForm = ({ trackingGoal }) => {
  const [wiggle, setWiggle] = useState(false)
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  useEffect(() => {
    if (
      formState.workoutGoalValue.valid &&
      !formState.workoutGoalOptions.touched
    ) {
      setWiggle(true)
    }
  }, [formState.workoutGoalValue.valid, formState.workoutGoalOptions.touched])

  const handlePostWorkoutNumber = event => {
    event.preventDefault()

    console.log('Posting workout numbers to database')
  }

  return (
    <FormContainer>
      <WorkoutPageHeadline>Track It:</WorkoutPageHeadline>
      <WorkoutPageDescription>{trackingGoal}</WorkoutPageDescription>
      <TrackingForm>
        <TextInput
          type="text"
          name="workoutGoal"
          labelName="Enter here"
          labelFor="workoutGoal"
          labelInstructions="How'd you do?"
          labelError="ONLY numbers!"
          labelSuccess="Post it!"
          value={formState.workoutGoalValue.value}
          valid={formState.workoutGoalValue.valid}
          initial={formState.workoutGoalOptions.initial}
          touched={formState.workoutGoalOptions.touched}
          showInstructions={formState.workoutGoalOptions.showInstructions}
          onChange={updateInputValues}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <WiggleButton
          shouldWiggle={wiggle}
          buttonType="submit"
          handleClick={handlePostWorkoutNumber}
        >
          Post
        </WiggleButton>
      </TrackingForm>
    </FormContainer>
  )
}

export default WorkoutTrackingForm

const FormContainer = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`

const TrackingForm = styled.form`
  margin: 24px 0 0 0;
  padding: 0;
  align-self: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 0;
  width: 100%;
`
