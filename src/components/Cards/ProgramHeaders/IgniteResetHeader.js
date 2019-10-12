import React from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper
} from '../../../styles/Containers'
import IgniteResetLogo from '../../../svgs/IgniteResetLogo'
import useBlurUp from '../../../hooks/useBlurUp'

const IgniteResetHeader = ({ coverImage, tinyCoverImage }) => {
  const [setSmallImage, setLargeImage, setParentContainer] = useBlurUp()

  return (
    <ProgramHeaderGrid>
      <ProgramBackgroundWrapper ref={setParentContainer}>
        <ProgramBackgroundImage
          ref={setLargeImage}
          src={coverImage}
          alt="7 Day Ignite Reset Program Cover"
          title="7 Day Ignite Reset Program"
        />
        <PlaceholderImage
          ref={setSmallImage}
          src={tinyCoverImage}
          alt="7 Day Ignite Reset Program Cover"
          title="7 Day Ignite Reset Program"
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default IgniteResetHeader

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

const Logo = styled(IgniteResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`
