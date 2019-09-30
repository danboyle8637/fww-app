import React from 'react'
import styled from 'styled-components'

import CompleteWorkoutIcon from '../../svgs/CompleteWorkoutIcon'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'
import siteConfig from '../../utils/siteConfig'

const CompleteWorkoutForm = ({
  programId,
  workoutId,
  handleToggleSync,
  handleSetSyncMessage
}) => {
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()

  const completed = workoutStatsState.stats[workoutId].completed

  const handleCompleteWorkoutClick = id => {
    if (id === 1) {
      dispatchStatsAction({
        type: 'setComplete1',
        value: workoutId
      })

      handleToggleSync()
      handleSetCompleteInDatabase(1)
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

  const handleSetCompleteInDatabase = completeId => {
    // TODO replace this with the user from state
    const username = 'pampam'

    const completeBody = {
      programId: programId,
      workoutId: workoutId,
      username: username,
      completeId: completeId
    }

    const baseUrl = siteConfig.api.baseUrl
    const toggleComplete = '/toggle-complete'
    const url = `${baseUrl}${toggleComplete}`

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(completeBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        handleSetSyncMessage(data.message)
        handleToggleSync()
      })
      .catch(errorObj => {
        console.log(errorObj)
      })
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
