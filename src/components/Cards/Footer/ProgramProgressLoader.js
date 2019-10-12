import React, { useState } from 'react'
import styled from 'styled-components'

import ProgressLoader from '../../../svgs/ProgressLoader'
import { useWorkoutStatsContext } from '../../../context/WorkoutStatsContext'

const ProgramProgressLoader = ({ programId }) => {
  const [percentComplete, setPercentComplete] = useState(0)
  // eslint-disable-next-line
  const [statsState, dispatchStatsAction] = useWorkoutStatsContext()

  const totalWorkouts = statsState.percentComplete.totalWorkouts
  const workoutsCompleted = statsState.percentComplete.workoutsCompleted
  const percentCompleteProgramId = statsState.percentComplete.programId

  if (programId === percentCompleteProgramId) {
    console.log(programId)
  }

  // It's going to get 50 or more program

  return (
    <ProgressContainer>
      <ProgressGraph
        totalWorkouts={totalWorkouts}
        workoutsCompleted={workoutsCompleted}
        setPercentComplete={setPercentComplete}
      />
      <PercentNumber>{`${percentComplete}%`}</PercentNumber>
    </ProgressContainer>
  )
}

export default ProgramProgressLoader

const ProgressContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
`

const ProgressGraph = styled(ProgressLoader)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 54px;
`

const PercentNumber = styled.p`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  font-family: QuicksandSemiBold;
  font-size: 11px;
  text-decoration: none;
  color: ${props => props.theme.primaryAccent};
  z-index: 1;
`
