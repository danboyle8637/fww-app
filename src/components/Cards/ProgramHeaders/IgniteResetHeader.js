import React from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper,
  ProgramBackgroundImage
} from '../../../styles/Containers'
import IgniteResetLogo from '../../../svgs/IgniteResetLogo'
import IgniteResetProgramCover from '../../../images/ignite-reset-program-cover.jpg'

const IgniteResetHeader = () => {
  return (
    <ProgramHeaderGrid>
      <ProgramBackgroundWrapper>
        <ProgramBackgroundImage
          src={IgniteResetProgramCover}
          alt="7 Day Ignite Reset Program Cover"
          title="7 Day Ignite Reset Program"
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default IgniteResetHeader

const Logo = styled(IgniteResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`
