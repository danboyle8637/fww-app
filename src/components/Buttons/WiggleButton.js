import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TimelineMax, Power2 } from 'gsap/all'

const WiggleButton = ({
  children,
  purple,
  shouldWiggle,
  handleClick,
  buttonType,
  disabled
}) => {
  const [runWiggle, setRunWiggle] = useState(true)
  const visibleButtonRef = useRef(null)
  const flashButtonRef = useRef(null)
  const wiggleTimeline = useRef(new TimelineMax())
  const pressTimeline = useRef(new TimelineMax())

  useEffect(() => {
    return () => {
      wiggleTimeline.current.kill()
      pressTimeline.current.kill()
      wiggleTimeline.current = null
      pressTimeline.current = null
    }
  }, [])

  useEffect(() => {
    const button = visibleButtonRef.current
    const pulse = flashButtonRef.current
    const tl = wiggleTimeline.current

    const endWiggle = () => {
      setRunWiggle(false)
    }

    if (shouldWiggle && runWiggle) {
      tl.to(pulse, 0.3, {
        scaleX: 1.1,
        scaleY: 1.5,
        opacity: 0,
        background: `${purple ? '#b44cff' : '#5afdf2'}`,
        ease: Power2.easeIn
      })
        .to(button, 0.1, {
          transformOrigin: '50% 50%',
          rotation: 2,
          ease: Power2.easeInOut,
          yoyo: true,
          yoyoEase: Power2.easeInOut,
          repeat: 4
        })
        .to(button, 0.1, {
          rotation: 0,
          onComplete: endWiggle
        })
    }

    return () => {
      tl.kill()
    }
  }, [shouldWiggle, runWiggle, purple])

  const handleMouseDown = () => {
    const button = visibleButtonRef.current
    const tl = pressTimeline.current

    if (!runWiggle) {
      tl.to(button, 0.13, {
        scale: 1.01,
        y: -0.5,
        boxShadow: '0 3px 10px 10px rgba(0,0,0,0.4)',
        background: '#b3fffa',
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
  }

  return (
    <ButtonGrid>
      <VisibleButton
        ref={visibleButtonRef}
        disabled={disabled}
        purple={purple}
        type={buttonType}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        {children}
      </VisibleButton>
      <FlashButton ref={flashButtonRef} disabled={disabled} />
    </ButtonGrid>
  )
}

export default WiggleButton

const ButtonGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const VisibleButton = styled.button`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0;
  padding: 10px 14px;
  background-color: ${props =>
    props.disabled
      ? props.theme.mainBackgroundColor
      : props.purple
      ? props.theme.tertiaryAccent
      : props.theme.primaryAccent};
  border-color: ${props => (props.disabled ? '#2B2C3A' : 'none')};
  border-width: ${props => (props.disabled ? '2px' : 0)};
  border-style: ${props => (props.disabled ? 'solid' : 'none')};
  border-radius: 6px;
  text-align: center;
  color: ${props =>
    props.disabled
      ? props.theme.accentBackgroundColor
      : props.theme.mainBackgroundColor};
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  max-width: 600px;
  box-shadow: ${props =>
    props.disabled ? 0 : '0 2px 3px 3px rgba(0, 0, 0, 0.2)'};
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  z-index: 1;
  transition: background-color, border-color, border-width, border-style, color,
    200ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
`

const FlashButton = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 10px 12px;
  background: ${props => (props.disabled ? 'none' : props.theme.primaryAccent)};
  border-radius: 6px;
  width: 100%;
  max-width: 600px;
`
