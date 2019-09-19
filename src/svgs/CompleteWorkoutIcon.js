import React, { useEffect, useRef } from 'react'
import { TweenMax, Power2 } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

import DrawSVG from '../greensock/DrawSVGPlugin'

const CompleteWorkoutIcon = ({ width, height, className, isComplete }) => {
  // eslint-disable-next-line
  const drawSVG = DrawSVG
  const circleFillRef = useRef(null)
  const checkRef = useRef(null)
  const timeline = useRef(new TimelineMax({ paused: true }))

  useEffect(() => {
    let firstRender = true
    const circleFill = circleFillRef.current
    const check = checkRef.current
    const tl = timeline.current

    if (isComplete && firstRender) {
      // Set the tween to the end of the animation
      TweenMax.set(circleFill, { scale: 1 })
      TweenMax.set(check, { drawSVG: '100% 0%' })
      firstRender = false
    } else {
      // Set the tween to the beginning of the animation
      TweenMax.set(circleFill, { transformOrigin: '50% 50%', scale: 0 })
      TweenMax.set(check, { drawSVG: '100% 100%' })
      firstRender = false
    }

    tl.to(circleFill, 0.3, {
      scale: 1,
      ease: Power2.easeOut
    }).to(check, 0.5, {
      drawSVG: '100% 0%',
      ease: Power2.easeOut
    })

    if (isComplete) {
      tl.play()
    } else {
      tl.reverse()
    }

    // Clean up the tweens
    return () => {
      tl.kill(null, circleFill)
      tl.kill(null, check)
      firstRender = true
    }
  }, [isComplete])

  // useEffect(() => {
  //   const tl = timeline.current

  //   if (isComplete) {
  //     tl.play()
  //   } else {
  //     tl.reverse()
  //   }
  // }, [isComplete])

  return (
    <svg
      id="workout-check-circle"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 241 241"
    >
      <title>Workout Checkmark Icon</title>
      <path
        d="M125.38 25.87a100.5 100.5 0 1 1-100.5 100.5 100.51 100.51 0 0 1 100.5-100.5m0-20a120.51 120.51 0 0 0-85.21 205.71A120.5 120.5 0 0 0 210.59 41.17a119.72 119.72 0 0 0-85.21-35.3z"
        transform="translate(-4.88 -5.87)"
        fill="#010101"
        id="check-circle-border"
      />
      <circle
        ref={circleFillRef}
        id="check-circle-fill"
        cx="120.5"
        cy="120.5"
        r="100.5"
        fill="#5AFDF2"
      />
      <path
        ref={checkRef}
        id="check"
        fill="none"
        stroke="#19191c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="27.32"
        d="M174.55 81.86l-77.27 77.28-30.83-30.84"
      />
    </svg>
  )
}

export default CompleteWorkoutIcon
