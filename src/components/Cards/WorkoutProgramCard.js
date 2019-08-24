import React from 'react'
import styled from 'styled-components'

import WorkoutCardHeader from './WorkoutCardHeader'
import WorkoutCardDescription from './WorkoutCardDescription'
import WorkoutCardFooter from './WorkoutCardFooter'
import ProgramCardFooter from './ProgramCardFooter'
import background from '../../images/bbc-reset-program-cover.jpg'

const WorkoutProgramCard = ({
  isWorkout,
  isProgram,
  programHeader,
  title = 'Workout Title',
  description
}) => {
  return (
    <CardContainer>
      {isWorkout ? (
        <WorkoutCardHeader
          background={background}
          altText="Text"
          title="Title"
        />
      ) : null}
      {isProgram ? programHeader : null}
      <WorkoutCardDescription
        isWorkout={isWorkout}
        title={title}
        description={description}
      />
      {isWorkout ? <WorkoutCardFooter /> : null}
      {isProgram ? <ProgramCardFooter /> : null}
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
`
