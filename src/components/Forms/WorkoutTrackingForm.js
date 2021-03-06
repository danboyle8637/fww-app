import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import TextInput from '../Forms/Inputs/TextInput'
import WiggleButton from '../Buttons/WiggleButton'
import {
  WorkoutPageHeadline,
  WorkoutPageDescription
} from '../../styles/Typography'
import { createDate } from '../../utils/helpers'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'
import { useProgramsContext } from '../../context/ProgramsContext'
import { useFormStore } from '../../context/FormContext'
import { useFetchingContext } from '../../context/FetchingContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import useFormControls from '../../hooks/useFormControls'
import { updateWorkoutsCompleteInLocalStorage } from '../../utils/helpers'
import siteConfig from '../../utils/siteConfig'

const WorkoutTrackingForm = ({
  trackingGoal,
  programId,
  workoutId,
  isSyncing,
  handleToggleSync,
  handleSetSyncMessage
}) => {
  const auth = useFireBase()
  const [wiggle, setWiggle] = useState(false)
  const [statsState, dispatchWorkoutStatsAction] = useWorkoutStatsContext()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [programState, dispatchProgramAction] = useProgramsContext()
  // eslint-disable-next-line
  const [fetchingState, dispatchFetchingAction] = useFetchingContext()
  const [updateInputValues, updateInputOptions] = useFormControls()

  useEffect(() => {
    return () => {
      dispatchFormAction({
        type: 'resetWorkoutGoalForm'
      })
    }
  }, [dispatchFormAction])

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

    const now = new Date()
    const date = createDate(now)

    const programStats = statsState[programId]

    // Update percent complete in local state
    if (!programStats[workoutId].completed.complete1.isComplete) {
      updateWorkoutsCompleteInLocalStorage(programId, 'fwwPrograms')

      dispatchProgramAction({
        type: 'incrementPercentComplete',
        value: programId
      })
    }

    // Update local state first with a timestamp
    dispatchWorkoutStatsAction({
      type: 'setTrackingNumber',
      value: {
        programId: programId,
        workoutId: workoutId,
        number: formState.workoutGoalValue.value,
        date: date
      }
    })

    handleToggleSync()
    dispatchFetchingAction({ type: 'toggleFetching' })

    const trackingBody = {
      programId: programId,
      workoutId: workoutId,
      number: formState.workoutGoalValue.value,
      date: date
    }

    const baseUrl = siteConfig.api.baseUrl
    const postWorkoutNumbers = '/post-workout-numbers'
    const url = `${baseUrl}${postWorkoutNumbers}`

    auth.getCurrentUser().then(user => {
      user.getIdToken(true).then(token => {
        fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(trackingBody)
        })
          .then(response => response.json())
          .then(data => {
            dispatchFormAction({ type: 'resetWorkoutGoalForm' })
            handleSetSyncMessage(data.message)
            handleToggleSync()
            dispatchFetchingAction({ type: 'toggleFetching' })
          })
          .catch(error => {
            dispatchFormAction({ type: 'resetWorkoutGoalForm' })
            handleSetSyncMessage(error.message)
            handleToggleSync()
            dispatchFetchingAction({ type: 'toggleFetching' })
          })
      })
    })
  }

  return (
    <FormContainer>
      <WorkoutPageHeadline>Track It:</WorkoutPageHeadline>
      <WorkoutPageDescription>{trackingGoal}</WorkoutPageDescription>
      <TrackingForm onSubmit={handlePostWorkoutNumber}>
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
          disabled={!formState.workoutGoalValue.valid}
          shouldWiggle={wiggle}
          buttonType="submit"
        >
          {formState.workoutGoalValue.valid
            ? isSyncing
              ? 'Posting'
              : 'Post'
            : '----'}
        </WiggleButton>
      </TrackingForm>
    </FormContainer>
  )
}

export default WorkoutTrackingForm

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
