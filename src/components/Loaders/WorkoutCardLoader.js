import React from 'react'
import styled from 'styled-components'

import { Header3 } from '../../styles/Typography'
import LoadingKettlebell from '../../svgs/LoadingKettlebell'

const WorkoutCardLoader = () => {
  return (
    <CardContainer>
      <Loader />
      <LoadingText>Loading workouts...</LoadingText>
    </CardContainer>
  )
}

export default WorkoutCardLoader

const CardContainer = styled.div`
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2px;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 40px 10px;
  width: 100%;
  max-width: 390px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
`

const Loader = styled(LoadingKettlebell)`
  width: 60px;
`

const LoadingText = styled(Header3)`
  color: ${props => props.theme.headlinePrimary};
`
