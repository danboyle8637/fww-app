import React from 'react'
import styled from 'styled-components'

const NumberOfWorkokutsIndicator = ({ workoutsArrayLength }) => {
  const showIndicators = () => {
    const indicatorArray = []
    for (let i = 0; i < workoutsArrayLength; i++) {
      indicatorArray.push(<WorkoutIndicator key={i} />)
    }

    return indicatorArray
  }

  return (
    <Container>
      <WorkoutLabel>Workouts:</WorkoutLabel>
      {showIndicators()}
    </Container>
  )
}

export default NumberOfWorkokutsIndicator

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
  border: 2px solid ${props => props.theme.headlinePrimary};
  background: transparent;
  width: 12px;
  height: 12px;
`
