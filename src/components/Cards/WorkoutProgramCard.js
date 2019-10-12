import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

import WorkoutCardHeader from './WorkoutCardHeader'
import ChooseProgramHeader from './ProgramHeaders/ChooseProgramHeader'
import WorkoutProgramDescription from './WorkoutProgramDescription'
import WorkoutCardFooter from './WorkoutCardFooter'
import ProgramCardFooter from './ProgramCardFooter'
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
  description
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
      {isWorkout ? <WorkoutCardFooter workoutId={workoutId} /> : null}
      {isProgram ? <ProgramCardFooter programId={programId} /> : null}
    </CardContainer>
  )
}

export default WorkoutProgramCard

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 40px 10px;
  width: 100%;
  max-width: 390px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  ${above.ipadPro`
    &:hover {
      transform: translateY(-4px);
      transition: transform 250ms ease-in-out;
    }
  `}
`
