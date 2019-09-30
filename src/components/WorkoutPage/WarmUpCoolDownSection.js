import React, { useState } from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import WarmUpCover from '../../images/warmup-cover1.jpg'
import CoolDownCover from '../../images/cooldown-cover1.jpg'
import Portal from '../Shared/Portal'
import PopUpVideo from '../WorkoutPage/PopUpVideo'
import WorkoutLabelIndicator from '../Indicators/WorkoutLabelIndicator'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const WarmUpCoolDownSection = ({
  warmUpTitle,
  warmupAltText,
  coolDownTitle,
  coolDownAltText
}) => {
  // eslint-disable-next-line
  const [portalState, dispatch] = usePortalContext()
  const [title, setTitle] = useState('')

  const handleToggleWarmUp = () => {
    dispatch({ type: 'toggleWarmUpVideo' })
    setTitle('Warm Up')
  }

  const handleToggleCoolDown = () => {
    dispatch({ type: 'toggleCoolDownVideo' })
    setTitle('Cool Down')
  }

  return (
    <WarmUpCoolDownContainer>
      <WorkoutSectionGrid>
        <BackgroundImage
          src={WarmUpCover}
          title={warmUpTitle}
          alt={warmupAltText}
        />
        <WorkoutLabelIndicator type={'warmup'} />
        <Play handleToggleVideo={handleToggleWarmUp} />
      </WorkoutSectionGrid>
      <WorkoutSectionGrid>
        <BackgroundImage
          src={CoolDownCover}
          title={coolDownTitle}
          alt={coolDownAltText}
        />
        <WorkoutLabelIndicator type={'cooldown'} />
        <Play handleToggleVideo={handleToggleCoolDown} />
      </WorkoutSectionGrid>
      <Portal component={<PopUpVideo title={title} />} />
    </WarmUpCoolDownContainer>
  )
}

export default WarmUpCoolDownSection

const WarmUpCoolDownContainer = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  ${above.ipadPro`
    margin-bottom: 12px;
    gap: 12px;
  `}
`

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px;
  width: 100%;
`

const Play = styled(PlayButton)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 30px;
  z-index: 1;
  ${above.mobile`
    width: 60px;
  `}
`
