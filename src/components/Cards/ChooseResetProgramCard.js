import React from 'react'
import styled from 'styled-components'

import ChooseProgramHeader from './ProgramHeaders/ChooseProgramHeader'
import WorkoutProgramDescription from './WorkoutProgramDescription'
import ProgramProductCardFooter from './ProgramProductCardFooter'
import FormCheck from '../../svgs/FormCheck'

const ChooseResetProgramCard = ({
  workoutId,
  description,
  fitnessLevel,
  numberOfWorkouts,
  duration,
  checked
}) => {
  return (
    <CardGrid>
      <CardContainer>
        <ChooseProgramHeader workoutId={workoutId} />
        <WorkoutProgramDescription description={description} />
        <ProgramProductCardFooter
          fitnessLevel={fitnessLevel}
          numberOfWorkouts={numberOfWorkouts}
          duration={duration}
        />
      </CardContainer>
      <SelectedCard checked={checked}>
        {checked ? <SeletedCheck teal /> : null}
      </SelectedCard>
    </CardGrid>
  )
}

export default ChooseResetProgramCard

const CardGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const CardContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 40px 10px;
  width: 100%;
  max-width: 390px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
`

const SelectedCard = styled.div`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background: ${props =>
    props.checked ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
  border-radius: 10px 10px 40px 10px;
  z-index: 1;
`

const SeletedCheck = styled(FormCheck)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  transform: translate(-50%, -50%);
`
