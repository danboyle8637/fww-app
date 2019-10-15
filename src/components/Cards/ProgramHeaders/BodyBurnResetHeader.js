import React from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper
} from '../../../styles/Containers'
import BodyBurnResetProgramCover from '../../../images/bbc-reset-program-cover.jpg'
import BodyBurnResetLogo from '../../../svgs/BodyBurnResetLogo'
import useBlurUp from '../../../hooks/useBlurUp'

const BodyBurnResetHeader = ({ coverImage, tinyCoverImage, signUpCard }) => {
  const [setSmallImage, setLargeImage, setParentContainer] = useBlurUp()

  return (
    <ProgramHeaderGrid>
      <ProgramBackgroundWrapper ref={setParentContainer}>
        <ProgramBackgroundImage
          ref={setLargeImage}
          src={signUpCard ? BodyBurnResetProgramCover : coverImage}
          alt="7 Day Body Burn Reset Program Cover"
          title="7 Day Body Burn Reset Program"
        />
        <PlaceholderImage
          ref={setSmallImage}
          src={tinyCoverImage}
          alt="7 Day Body Burn Reset Program Cover"
          title="7 Day Body Burn Reset Program"
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default BodyBurnResetHeader

const ProgramBackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
`

const PlaceholderImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
  filter: blur(6px);
  transform: scale(1);
  z-index: 2;
`

const Logo = styled(BodyBurnResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`
