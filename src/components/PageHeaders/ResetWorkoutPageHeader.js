import React from 'react'
import styled from 'styled-components'

import { Header4 } from '../../styles/Typography'

const ResetWorkoutPageHeader = ({ name }) => {
  return (
    <HeaderContainer>
      <WorkoutName>{name}</WorkoutName>
    </HeaderContainer>
  )
}

export default ResetWorkoutPageHeader

const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WorkoutName = styled(Header4)`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`
