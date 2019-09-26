import React from 'react'
import styled from 'styled-components'

import NextWorkoutArrow from '../../svgs/NextWorkoutArrow'

const NextWorkoutButton = () => {
  return (
    <ButtonContainer>
      <NextArrow />
    </ButtonContainer>
  )
}

export default NextWorkoutButton

const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  width: 20%;
`

const NextArrow = styled(NextWorkoutArrow)`
  width: 12px;
`
