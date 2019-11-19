import React from 'react'
import styled from 'styled-components'

import CompleteWorkoutIcon from '../../svgs/CompleteWorkoutIcon'
import { useProgramsContext } from '../../context/ProgramsContext'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'

const CompleteWorkoutForm = ({
  programId,
  workoutId,
  handleToggleSync,
  handleSetSyncMessage
}) => {
  const auth = useFireBase()
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()
  // eslint-disable-next-line
  const [programState, dispatchProgramAction] = useProgramsContext()

  const programStats = workoutStatsState[programId]
  const completed = programStats[workoutId].completed

  const handleCompleteWorkoutClick = id => {
    if (id === 1) {
      dispatchStatsAction({
        type: 'setComplete1',
        value: {
          programId: programId,
          workoutId: workoutId
        }
      })

      dispatchProgramAction({
        type: 'incrementPercentComplete',
        value: programId
      })

      handleToggleSync()
      handleSetCompleteInDatabase(1)
    } else if (id === 2) {
      dispatchStatsAction({
        type: 'setComplete2',
        value: {
          programId: programId,
          workoutId: workoutId
        }
      })

      handleToggleSync()
      handleSetCompleteInDatabase(2)
    } else if (id === 3) {
      dispatchStatsAction({
        type: 'setComplete3',
        value: {
          programId: programId,
          workoutId: workoutId
        }
      })

      handleToggleSync()
      handleSetCompleteInDatabase(3)
    } else {
      return
    }
  }

  const handleSetCompleteInDatabase = completeId => {
    const completeBody = {
      programId: programId,
      workoutId: workoutId,
      completeId: completeId
    }

    const baseUrl = siteConfig.api.baseUrl
    const toggleComplete = '/set-complete'
    const url = `${baseUrl}${toggleComplete}`

    auth.getCurrentUser().then(user => {
      user.getIdToken(true).then(token => {
        fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(completeBody)
        })
          .then(response => response.json())
          .then(data => {
            handleSetSyncMessage(data.message)
            handleToggleSync()
          })
          .catch(errorObj => {
            handleSetSyncMessage(errorObj.message)
            handleToggleSync()
          })
      })
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
