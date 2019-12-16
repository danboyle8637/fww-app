import React from 'react'
import styled from 'styled-components'

import NavigationArrow from '../../svgs/NavigationArrow'
import { above } from '../../styles/Theme'

const BackChip = ({ children, handleClick }) => {
  return (
    <ChipContainer type="button" onClick={handleClick}>
      <Arrow gradientId="backButton" />
      <ChipLabel>{children}</ChipLabel>
    </ChipContainer>
  )
}

export default BackChip

const ChipContainer = styled.button`
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  background: rgba(43, 44, 58, 0.5);
  border: none;
  border-radius: 50px;
  width: max-content;
  cursor: pointer;
  outline: none;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.tertiaryAccent};
    }
  `}
`

const ChipLabel = styled.p`
  margin: 0 0 0 8px;
  padding: 0;
  font-family: QuicksandSemiBold;
  font-size: 13px;
  line-height: 1.3;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
`

const Arrow = styled(NavigationArrow)`
  width: 10px;
  transform: rotate(180deg);
`
