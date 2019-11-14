import React from 'react'
import styled from 'styled-components'

import PlayButton from '../../svgs/PlayButton'
import Portal from '../Shared/Portal'
import PopUpVideo from '../WorkoutPage/PopUpVideo'
import { usePortalContext } from '../../context/portalContext'

const DashboardTrainingPlanCard = ({ programId }) => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleToggleVideo = () => {
    console.log('Show portal and coaching video.')
    dispatchPortalAction({ type: 'toggleTrainingPlanVideo' })
  }

  return (
    <CardContainer>
      <TrainingPlanHeadline>The Plan:</TrainingPlanHeadline>
      <Play handleToggleVideo={handleToggleVideo} />
      <Portal>
        <PopUpVideo title="Training_Plan" programId={programId} />
      </Portal>
    </CardContainer>
  )
}

export default DashboardTrainingPlanCard

const CardContainer = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 12px;
  justify-items: center;
  background: ${props => props.theme.baseBackgroundColor};
  border-radius: 8px;
`

const TrainingPlanHeadline = styled.h3`
  margin: 0;
  padding: 0;
  font-family: RobotoBold;
  font-size: 22px;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1rem;
`

const Play = styled(PlayButton)`
  align-self: center;
  width: 60px;
`
