import React from 'react'
import styled from 'styled-components'

import WorkoutStatsSection from './Footer/WorkoutStatsSection'
import NavigationArrow from '../Shared/NavigationArrow'

const WorkoutCardFooter = () => {
  return (
    <FooterContainer>
      <WorkoutStatsSection />
      <NavigationArrow />
    </FooterContainer>
  )
}

export default WorkoutCardFooter

const FooterContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
