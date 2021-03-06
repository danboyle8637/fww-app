import React from 'react'
import styled from 'styled-components'

import CompleteWorkoutForm from './CompleteWorkoutForm'
import FavoriteWorkoutForm from './FavoriteWorkouktForm'
import {
  WorkoutPageHeadline,
  WorkoutPageDescription
} from '../../styles/Typography'

const CompleteFavoriteWorkoutForm = ({
  programId,
  workoutId,
  handleToggleSync,
  handleSetSyncMessage
}) => {
  return (
    <FormContainer>
      <WorkoutPageHeadline>Complete It:</WorkoutPageHeadline>
      <WorkoutPageDescription>
        When you complete the workout, check if off. If you love it, mark it as
        a favorite.
      </WorkoutPageDescription>
      <CheckBoxWrapper>
        <CompleteWorkoutForm
          programId={programId}
          workoutId={workoutId}
          handleToggleSync={handleToggleSync}
          handleSetSyncMessage={handleSetSyncMessage}
        />
        <FavoriteWorkoutForm
          programId={programId}
          workoutId={workoutId}
          handleToggleSync={handleToggleSync}
          handleSetSyncMessage={handleSetSyncMessage}
        />
      </CheckBoxWrapper>
    </FormContainer>
  )
}

export default CompleteFavoriteWorkoutForm

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CheckBoxWrapper = styled.div`
  margin: 24px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`
