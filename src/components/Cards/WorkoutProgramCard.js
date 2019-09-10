import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import WorkoutCardHeader from './WorkoutCardHeader'
import ChooseProgramHeader from './ProgramHeaders/ChooseProgramHeader'
import WorkoutProgramDescription from './WorkoutProgramDescription'
import WorkoutCardFooter from './WorkoutCardFooter'
import ProgramCardFooter from './ProgramCardFooter'
import background from '../../images/bbc-reset-program-cover.jpg'

const WorkoutProgramCard = ({
  isWorkout,
  isProgram,
  programId,
  coverImage,
  title = 'Workout Title',
  description
}) => {
  return (
    <Link to={`/program/${programId}`} style={{ textDecoration: 'none' }}>
      <CardContainer>
        {isWorkout ? (
          <WorkoutCardHeader
            background={background}
            altText="Text"
            title="Title"
          />
        ) : null}
        {isProgram ? (
          <ChooseProgramHeader programId={programId} coverImage={coverImage} />
        ) : null}
        <WorkoutProgramDescription
          isWorkout={isWorkout}
          title={title}
          description={description}
        />
        {isWorkout ? <WorkoutCardFooter /> : null}
        {isProgram ? <ProgramCardFooter programId={programId} /> : null}
      </CardContainer>
    </Link>
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
`
