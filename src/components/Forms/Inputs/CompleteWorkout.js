import React from 'react'
import styled from 'styled-components'

import CompleteWorkoutIcon from '../../../svgs/CompleteWorkoutIcon'

const CompleteWorkout = () => {
  return (
    <Container>
      <Label>Mark as complete:</Label>
      <CheckBoxWrapper>
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </CheckBoxWrapper>
    </Container>
  )
}

export default CompleteWorkout

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
`

const Label = styled.p`
  font-family: RobotoBold;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
`

const CheckBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 10px;
`

const CheckBox = styled(CompleteWorkoutIcon)`
  width: 40px;
`
