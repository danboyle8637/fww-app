import React from 'react'
import styled from 'styled-components'

import { above } from '../../styles/Theme'

const OptionsButton = ({ children, handleClick }) => {
  return <Button onClick={handleClick}>{children}</Button>
}

export default OptionsButton

const Button = styled.button`
  margin: 0;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(139, 83, 246, 0.4);
  border: 2px solid ${props => props.theme.secondaryAccent};
  border-radius: 90px;
  color: ${props => props.theme.whiteText};
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  width: 100%;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: box-shadow, background-color, border-color, border-width,
    border-style, color, 300ms ease-in-out;
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
