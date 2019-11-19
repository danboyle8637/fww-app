import React from 'react'
import styled from 'styled-components'

import FooterCircleIcon from './FooterCircleIcon'
import { useWorkoutStatsContext } from '../../../context/WorkoutStatsContext'

const WorkoutCompletedDots = ({ programId, workoutId }) => {
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()
  const programStats = workoutStatsState[`${programId}`]
  const completedStats = programStats[`${workoutId}`]

  return (
    <DotContainer>
      <FooterCircleIcon
        active={
          completedStats ? completedStats.completed.complete1.isComplete : false
        }
      />
      <FooterCircleIcon
        active={
          completedStats ? completedStats.completed.complete2.isComplete : false
        }
      />
      <FooterCircleIcon
        active={
          completedStats ? completedStats.completed.complete3.isComplete : false
        }
      />
    </DotContainer>
  )
}

export default WorkoutCompletedDots

const DotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`
