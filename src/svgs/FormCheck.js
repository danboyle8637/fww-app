import React, { useEffect, useRef } from 'react'
import { TweenMax } from 'gsap/TweenMax'
import drawSVG from '../greensock/DrawSVGPlugin'

const FormCheck = ({ width, height, className, teal }) => {
  const checkRef = useRef(null)
  // eslint-disable-next-line
  const useDrawSVG = drawSVG

  useEffect(() => {
    const checkmark = checkRef.current

    TweenMax.fromTo(
      checkmark,
      0.5,
      {
        drawSVG: '100% 100%'
      },
      {
        drawSVG: '100% 0%'
      }
    )

    return () => {
      TweenMax.killTweensOf(checkmark)
    }
  }, [])

  return (
    <svg
      id="form-check"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 163.92 126.59"
    >
      <title>Check Icon</title>
      <path
        ref={checkRef}
        id="check"
        fill="none"
        stroke={teal ? '#5AFDF2' : '#8b53f6'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="33.07"
        d="M147.39 16.53l-93.53 93.53-37.33-37.32"
      />
    </svg>
  )
}

export default FormCheck
