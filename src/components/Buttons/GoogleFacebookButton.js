import React from 'react'
import styled from 'styled-components'

import Google from '../../svgs/GoogleButtonIcon'
import Facebook from '../../svgs/FacebookButtonIcon'
import { above } from '../../styles/Theme'

const GoogleFacebookButton = ({
  children,
  provider,
  handleClick,
  isLinkedUp
}) => {
  return (
    <Button onClick={handleClick} provider={provider} isLinkedUp={isLinkedUp}>
      {provider === 'google' ? <GoogleIcon /> : <FacebookIcon />}
      <ButtonText>{children}</ButtonText>
    </Button>
  )
}

export default GoogleFacebookButton

const Button = styled.button`
  margin: 0;
  padding: 8px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.provider === 'google' && props.isLinkedUp
      ? 'rgba(255, 255, 255, 0.2)'
      : props.provider === 'google'
      ? '#e1e1e1'
      : props.isLinkedUp
      ? 'rgba(66, 103, 178, 0.2)'
      : '#4267B2'};
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 48px;
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

const ButtonText = styled.h5`
  margin: 0 0 0 8px;
  padding: 0;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${props =>
    props.disabled
      ? props.theme.accentBackgroundColor
      : props.theme.mainBackgroundColor};
`

const GoogleIcon = styled(Google)`
  margin: 0;
  width: 20px;
`

const FacebookIcon = styled(Facebook)`
  width: 20px;
`
