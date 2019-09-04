import React from 'react'
import styled from 'styled-components'

import ChooseProgramHeader from './ProgramHeaders/ChooseProgramHeader'
import WorkoutProgramDescription from './WorkoutProgramDescription'
import ProgramProductCardFooter from './ProgramProductCardFooter'

const ChooseResetProgramCard = ({ workoutId, description, fitnessLevel, numberOfWorkouts, duration }) => {
  return (
    <CardContainer>
      <ChooseProgramHeader workoutId={workoutId} />
      <WorkoutProgramDescription description={description} />
      <ProgramProductCardFooter
        fitnessLevel={fitnessLevel}
        numberOfWorkouts={numberOfWorkouts}
        duration={duration}
      />
    </CardContainer>
  )
}

export default ChooseResetProgramCard

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 40px 10px;
  width: 100%;
  max-width: 390px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
`
