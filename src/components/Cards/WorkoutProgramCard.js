import React from 'react'
import styled from 'styled-components'

import WorkoutCardHeader from './WorkoutCardHeader'
import ChooseProgramHeader from './ProgramHeaders/ChooseProgramHeader'
import WorkoutProgramDescription from './WorkoutProgramDescription'
import WorkoutCardFooter from './WorkoutCardFooter'
import ProgramCardFooter from './ProgramCardFooter'
import PurchaseProgramFooter from './PurchaseProgramFooter'
import { above } from '../../styles/Theme'

const WorkoutProgramCard = ({
  isWorkout,
  isProgram,
  programId = null,
  workoutId = null,
  coverImage,
  tinyCoverImage,
  tinyImage,
  title = 'Workout Title',
  description,
  activeProgram,
  setAddingProgramToAccount,
  setLoadingMessage,
  fitnessLevel,
  duration,
  totalWorkouts,
  price
}) => {
  return (
    <CardContainer>
      {isWorkout ? (
        <WorkoutCardHeader
          background={coverImage}
          tinyImage={tinyImage}
          altText="Text"
          title="Title"
        />
      ) : null}
      {isProgram ? (
        <ChooseProgramHeader
          programId={programId}
          coverImage={coverImage}
          tinyCoverImage={tinyCoverImage}
        />
      ) : null}
      <WorkoutProgramDescription
        isWorkout={isWorkout}
        title={title}
        description={description}
      />
      {isWorkout ? (
        <WorkoutCardFooter programId={programId} workoutId={workoutId} />
      ) : null}
      {isProgram ? (
        activeProgram ? (
          <ProgramCardFooter programId={programId} />
        ) : (
          <PurchaseProgramFooter
            fitnessLevel={fitnessLevel}
            duration={duration}
            numberOfWorkouts={totalWorkouts}
            price={price}
          />
        )
      ) : null}
    </CardContainer>
  )
}

export default WorkoutProgramCard

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 40px 10px;
  width: 100%;
  max-width: 390px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  transition: box-shadow 300ms ease-in-out;
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.primaryAccent};
    }
  `}
`
