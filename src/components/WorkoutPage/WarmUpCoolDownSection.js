import React from 'react'
import styled from 'styled-components'

import { WorkoutSectionGrid } from '../../styles/Containers'
import PlayButton from '../../svgs/PlayButton'
import WarmUpCover from '../../images/warmup-cover1.jpg'
import CoolDownCover from '../../images/cooldown-cover1.jpg'

const WarmUpCoolDownSection = ({
  warmUpTitle,
  warmupAltText,
  coolDownTitle,
  coolDownAltText
}) => {
  return (
    <WarmUpCoolDownContainer>
      <WorkoutSectionGrid>
        <BackgroundImage
          src={WarmUpCover}
          title={warmUpTitle}
          alt={warmupAltText}
        />
        <Play />
      </WorkoutSectionGrid>
      <WorkoutSectionGrid>
        <BackgroundImage
          src={CoolDownCover}
          title={coolDownTitle}
          alt={coolDownAltText}
        />
        <Play />
      </WorkoutSectionGrid>
    </WarmUpCoolDownContainer>
  )
}

export default WarmUpCoolDownSection

const WarmUpCoolDownContainer = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
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
`
