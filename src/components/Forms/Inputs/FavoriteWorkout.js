import React from 'react'
import styled from 'styled-components'

import FavoriteWorkoutIcon from '../../../svgs/FavoriteWorkoutIcon'

const FavoriteWorkout = () => {
  return (
    <Container>
      <Label>Mark this workout as a favorite:</Label>
      <CheckBox />
    </Container>
  )
}

export default FavoriteWorkout

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

const CheckBox = styled(FavoriteWorkoutIcon)`
  width: 40px;
`
