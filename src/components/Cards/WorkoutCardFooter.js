import React from 'react'
import styled from 'styled-components'

import WorkoutStatsSection from './Footer/WorkoutStatsSection'
import NavigationArrow from '../Shared/NavigationArrow'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'

const WorkoutCardFooter = ({ workoutId }) => {
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()

  const stats = workoutStatsState.stats.find(element => {
    return element.workoutId === workoutId
  })

  console.log(stats)

  return (
    <FooterContainer>
      <WorkoutStatsSection stats={stats} />
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
