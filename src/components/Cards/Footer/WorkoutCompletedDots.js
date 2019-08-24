import React from 'react'
import styled from 'styled-components'

import FooterCircleIcon from './FooterCircleIcon'

const WorkoutCompletedDots = () => {
  return (
    <DotContainer>
      <FooterCircleIcon active={true} />
      <FooterCircleIcon active={false} />
      <FooterCircleIcon active={false} />
    </DotContainer>
  )
}

export default WorkoutCompletedDots

const DotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`
