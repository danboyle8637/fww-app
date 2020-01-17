import React from 'react'
import styled from 'styled-components'

import CircuitIcon from '../../svgs/CircuitIcon'
import {
  WorkoutPageHeadline,
  WorkoutPageDescription
} from '../../styles/Typography'
import { useWorkoutState } from '../../context/WorkoutsContext'
import { above } from '../../styles/Theme'

const WorkoutParser = ({ programId, workoutId }) => {
  // eslint-disable-next-line
  const [workoutsState, dispatchWorkoutAction] = useWorkoutState()

  const programWorkouts = workoutsState[programId]
  const workoutData = programWorkouts.find(
    workout => workout.workoutId === workoutId
  )

  const workoutTitle = workoutData.workout.title
  const workoutDescription = workoutData.workout.description

  const workout = workoutData.workout.circuits.map(circuit => {
    const exercises = circuit.exercises.map((exercise, index) => {
      return <ExerciseNames key={index}>{exercise}</ExerciseNames>
    })

    return (
      <CircuitWrapper key={circuit.id}>
        <CircuitHeaderWrapper>
          <Icon />
          <CircuitDescription>{circuit.directions}</CircuitDescription>
        </CircuitHeaderWrapper>
        <CircuitDetails>{exercises}</CircuitDetails>
      </CircuitWrapper>
    )
  })

  return (
    <WorkoutSectionContainer>
      <WorkoutPageHeadline>{workoutTitle}</WorkoutPageHeadline>
      <WorkoutPageDescription>{workoutDescription}</WorkoutPageDescription>
      <WorkokutContainer>{workout}</WorkokutContainer>
    </WorkoutSectionContainer>
  )
}

export default WorkoutParser

const WorkoutSectionContainer = styled.div`
  margin: 80px 0;
  padding: 0 16px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  width: 100%;
  ${above.mobile`
    width: 43rem;
  `}
  ${above.tablet`
    width: 53rem;
  `}
`

const WorkokutContainer = styled.div`
  margin: 40px 0;
`

const CircuitWrapper = styled.div`
  margin: 0 0 60px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border-radius: 6px;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`

const CircuitHeaderWrapper = styled.div`
  padding: 6px 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 8px;
`

const CircuitDetails = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CircuitDescription = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
  font-weight: 800;
  line-height: 1.4;
`

const Icon = styled(CircuitIcon)`
  align-self: start;
  width: 30px;
`

const ExerciseNames = styled.p`
  position: relative;
  margin: 0 0 8px 20px;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: ${props =>
      props.accent ? props.theme.secondaryAccent : props.theme.primaryAccent};
    border-radius: 50%;
    width: 8px;
    height: 8px;
    transform: translate(-200%, 120%);
  }
  &:last-child {
    margin-bottom: 0;
  }
`
