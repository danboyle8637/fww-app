import React from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper,
  ProgramBackgroundImage
} from '../../../styles/Containers'
import StrongResetLogo from '../../../svgs/StrongResetLogo'
import StrongResetProgramCover from '../../../images/strong-reset-program-cover.jpg'

const StrongResetHeader = () => {
  return (
    <ProgramHeaderGrid>
      <ProgramBackgroundWrapper>
        <ProgramBackgroundImage
          src={StrongResetProgramCover}
          alt="7 Day Strong Reset Program Cover"
          title="7 Day Strong Reset Program"
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default StrongResetHeader

const Logo = styled(StrongResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`
