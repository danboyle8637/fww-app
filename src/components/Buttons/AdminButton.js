import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax, Power2 } from 'gsap/all'

import { above } from '../../styles/Theme'

const AdminButton = ({
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
      boxShadow: '0 3px 6px 6px rgba(0,0,0,0.4)',
      background: `${purple ? '#28273d' : '#2e2e38'}`,
      ease: Power2.easeOut
    }).to(
      button,
      0.13,
      {
        scale: 1,
        y: 0,
        boxShadow: '0 2px 3px 3px rgba(0, 0, 0, 0.2)',
        background: `${purple ? '#191925' : '#202025'}`,
        ease: Power2.easeOut
      },
      '-=0.10'
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

export default AdminButton

const Button = styled.button`
  margin: 0;
  padding: 8px 14px;
  background-color: ${props => (props.purple ? '#191925' : '#202025')};
  border-radius: 6px;
  border: 2px solid ${props => props.theme.headlineSecondary};
  font-family: QuicksandMedium;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.headlineSecondary};
  width: 100%;
  height: 48px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
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
