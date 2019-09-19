import React from 'react'
import styled from 'styled-components'

import { Header4 } from '../../styles/Typography'
import { above } from '../../styles/Theme'

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
  ${above.mobile`
    padding: 20px;
  `}
  ${above.tablet`
    padding: 40px 0 20px 0;
  `}
`

const WorkoutName = styled(Header4)`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  ${above.mobile`
    font-size: 32px;
  `}
`
