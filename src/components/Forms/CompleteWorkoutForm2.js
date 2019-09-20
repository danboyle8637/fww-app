import React from 'react'
import styled from 'styled-components'

import CompleteWorkoutIcon from '../../svgs/CompleteWorkoutIcon'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'

const CompleteWorkoutForm = ({ workoutId }) => {
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()

  const completed = workoutStatsState.stats[workoutId].completed

  const handleCompleteWorkoutClick = id => {
    if (id === 1) {
      dispatchStatsAction({
        type: 'setComplete1',
        value: workoutId
      })

      // TODO Make network request to update database
    } else if (id === 2) {
      dispatchStatsAction({
        type: 'setComplete2',
        value: workoutId
      })

      // TODO Make network request to update database
    } else if (id === 3) {
      dispatchStatsAction({
        type: 'setComplete3',
        value: workoutId
      })

      // TODO Make network request to update database
    } else {
      console.log('How did you click a button that wasnt on the screen?')
    }
  }

  return (
    <CompleteWorkoutContainer>
      <Label>Complete workout:</Label>
      <ButtonWrapper>
        <CompleteWorkout
          id={1}
          isComplete={completed.complete1.isComplete}
          handleCompleteWorkoutClick={handleCompleteWorkoutClick}
        />
        <CompleteWorkout
          id={2}
          isComplete={completed.complete2.isComplete}
          handleCompleteWorkoutClick={handleCompleteWorkoutClick}
        />
        <CompleteWorkout
          id={3}
          isComplete={completed.complete3.isComplete}
          handleCompleteWorkoutClick={handleCompleteWorkoutClick}
        />
      </ButtonWrapper>
    </CompleteWorkoutContainer>
  )
}

export default CompleteWorkoutForm

const CompleteWorkoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: center;
`

const Label = styled.p`
  font-family: RobotoBold;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 12px;
  align-items: center;
  justify-items: start;
`

const CompleteWorkout = styled(CompleteWorkoutIcon)`
  width: 40px;
`
