import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax, Power2 } from 'gsap/all'

const BaseButton = ({
  children,
  purple,
  disabled,
  handleClick,
  buttonType
}) => {
  const buttonRef = useRef(null)
  const timeline = useRef(new TimelineMax())

  useEffect(() => {
    return () => {
      timeline.current.kill()
      timeline.current = null
    }
  }, [])

  const handleMouseDown = () => {
    const button = buttonRef.current
    const tl = timeline.current

    tl.to(button, 0.13, {
      scale: 1.01,
      y: -0.5,
      boxShadow: '0 3px 10px 10px rgba(0,0,0,0.4)',
      background: `${purple ? '#d8a2ff' : '#b3fffa'}`,
      ease: Power2.easeOut
    }).to(
      button,
      0.13,
      {
        scale: 1,
        y: 0,
        boxShadow: '0 2px 3px 3px rgba(0, 0, 0, 0.2)',
        background: `${purple ? '#b44cff' : '#5afdf2'}`,
        ease: Power2.easeOut
      },
      '-=0.05'
    )
  }

  return (
    <Button
      ref={buttonRef}
      type={buttonType}
      purple={purple}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

export default BaseButton

const Button = styled.button`
  margin: 0;
  padding: 8px 14px;
  background-color: ${props =>
    props.disabled
      ? 'transparent'
      : props.purple
      ? props.theme.tertiaryAccent
      : props.theme.primaryAccent};
  border-radius: 6px;
  border-color: ${props => (props.disabled ? '#2B2C3A' : 'none')};
  border-width: ${props => (props.disabled ? '2px' : 0)};
  border-style: ${props => (props.disabled ? 'solid' : 'none')};
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  color: ${props =>
    props.disabled
      ? props.theme.accentBackgroundColor
      : props.theme.mainBackgroundColor};
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 48px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
  transition: background-color, border-color, border-width, border-style, color,
    200ms ease-in-out;
`
