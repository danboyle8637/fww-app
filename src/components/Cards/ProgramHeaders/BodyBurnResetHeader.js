import React from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper,
  ProgramBackgroundImage
} from '../../../styles/Containers'
import BodyBurnResetLogo from '../../../svgs/BodyBurnResetLogo'
import BodyBurnResetProgramCover from '../../../images/bbc-reset-program-cover.jpg'

const BodyBurnResetHeader = () => {
  return (
    <ProgramHeaderGrid>
      <ProgramBackgroundWrapper>
        <ProgramBackgroundImage
          src={BodyBurnResetProgramCover}
          alt="7 Day Body Burn Reset Program Cover"
          title="7 Day Body Burn Reset Program"
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default BodyBurnResetHeader

const Logo = styled(BodyBurnResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`
