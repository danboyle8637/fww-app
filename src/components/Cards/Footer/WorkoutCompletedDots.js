import React from 'react'
import styled from 'styled-components'

import FooterCircleIcon from './FooterCircleIcon'

const WorkoutCompletedDots = ({ completed }) => {
  return (
    <DotContainer>
      <FooterCircleIcon active={completed.complete1.isComplete} />
      <FooterCircleIcon active={completed.complete2.isComplete} />
      <FooterCircleIcon active={completed.complete3.isComplete} />
    </DotContainer>
  )
}

export default WorkoutCompletedDots

const DotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`
