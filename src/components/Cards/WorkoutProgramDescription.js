import React from 'react'
import styled from 'styled-components'

const WorkoutProgramDescription = ({ isWorkout, title, description }) => {
  return (
    <BodyContainer>
      {isWorkout ? <HeadlineWrapper>{title}</HeadlineWrapper> : null}
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </BodyContainer>
  )
}

export default WorkoutProgramDescription

const BodyContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeadlineWrapper = styled.h3`
  margin: 0;
  padding: 0;
  font-family: RobotoBold;
  font-size: 22px;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

const DescriptionWrapper = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-family: QuicksandSemiBold;
  font-size: 14px;
  color: ${props => props.theme.bodyText};
`
