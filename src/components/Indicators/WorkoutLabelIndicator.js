import React from 'react'
import styled from 'styled-components'

const WorkoutLabelIndicator = ({ workoutBackgrounds, activeVideo, type }) => {
  const showWorkoutDots = () => {
    if (workoutBackgrounds) {
      const dots = workoutBackgrounds.map((item, index) => {
        return <WorkoutIndicator key={index} filled={activeVideo === index} />
      })

      return dots
    }
  }

  const renderLabel = () => {
    switch (type) {
      case 'workout': {
        return (
          <>
            <WorkoutLabel>
              {workoutBackgrounds.length < 2 ? 'workout' : 'workouts:'}
            </WorkoutLabel>
            {workoutBackgrounds.length < 2 ? null : showWorkoutDots()}
          </>
        )
      }
      case 'coaching': {
        return (
          <>
            <WorkoutLabel>Coaching</WorkoutLabel>
          </>
        )
      }
      case 'warmup': {
        return (
          <>
            <WorkoutLabel>Warm Up</WorkoutLabel>
          </>
        )
      }
      case 'cooldown': {
        return (
          <>
            <WorkoutLabel>Cool Down</WorkoutLabel>
          </>
        )
      }
      default: {
        return null
      }
    }
  }

  return <Container>{renderLabel()}</Container>
}

export default WorkoutLabelIndicator

const Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  justify-self: start;
  padding: 1px 8px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0 8px 0 0;
  z-index: 2;
`

const WorkoutLabel = styled.p`
  margin: 0 4px 0 0;
  padding: 0;
  font-size: 12px;
  text-transform: uppercase;
  color: #e1e1e1;
  letter-spacing: 0.1rem;
`

const WorkoutIndicator = styled.div`
  margin: 0 0 0 3px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.primaryAccent};
  background-color: ${props =>
    props.filled ? props.theme.primaryAccent : 'transparent'};
  width: 12px;
  height: 12px;
  transition: background-color 400ms ease-in-out;
`
