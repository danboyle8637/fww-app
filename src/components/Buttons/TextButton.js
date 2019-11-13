import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax, Power2 } from 'gsap/all'

const TextButton = ({ children, purple = null, handleClick }) => {
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
      backgroundColor: `${
        purple ? 'rgba(180, 76, 255, 0.6)' : 'rgba(90, 253, 242, 0.6)'
      }`,
      ease: Power2.easeOut
    }).to(
      button,
      0.13,
      {
        scale: 1,
        y: 0,
        backgroundColor: `${
          purple ? 'rgba(180, 76, 255, 0.05)' : 'rgba(90, 253, 242, 0.05)'
        }`,
        ease: Power2.easeOut
      },
      '-=0.05'
    )
  }

  return (
    <Button
      purple={purple}
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

export default TextButton

const Button = styled.button`
  margin: 0;
  padding: 8px 14px;
  border-radius: 6px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  color: ${props =>
    props.purple ? props.theme.tertiaryAccent : props.theme.primaryAccent};
  width: 100%;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
`
