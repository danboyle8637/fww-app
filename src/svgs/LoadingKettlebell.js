import React, { useEffect, useRef } from 'react'
import { Linear } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'
import DrawSVG from '../greensock/DrawSVGPlugin'

const LoadingKettlebell = ({ width, height, className }) => {
  const kettlebellRef = useRef(null)
  const handleRef = useRef(null)
  const timeline = useRef(new TimelineMax({ paused: false, repeat: -1 }))
  // eslint-disable-next-line
  const drawSVG = DrawSVG

  useEffect(() => {
    const kettlebellPath = kettlebellRef.current
    const handlePath = handleRef.current
    const tl = timeline.current

    tl.fromTo(
      [kettlebellPath, handlePath],
      2,
      { drawSVG: '0% 0%' },
      {
        drawSVG: '0% 100%',
        ease: Linear.easeNone
      }
    ).to([kettlebellPath, handlePath], 2, {
      drawSVG: '100% 100%',
      ease: Linear.easeNone
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 138.39 189.6"
    >
      <defs>
        <linearGradient
          id="loadingKettlebellGradient"
          x1="32.21"
          y1="57.38"
          x2="175.44"
          y2="140.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".11" stopColor="#5afdf2" />
          <stop offset=".38" stopColor="#82aff8" />
          <stop offset=".73" stopColor="#b44cff" />
          <stop offset=".83" stopColor="#a44ffc" />
          <stop offset="1" stopColor="#8b53f6" />
        </linearGradient>
        <linearGradient
          id="loadingKettlebellGradient2"
          x1="71.29"
          y1="33.94"
          x2="135.24"
          y2="70.86"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".11" stopColor="#5afdf2" />
          <stop offset=".39" stopColor="#82aff8" />
          <stop offset=".75" stopColor="#b44cff" />
          <stop offset=".84" stopColor="#a44ffc" />
          <stop offset="1" stopColor="#8b53f6" />
        </linearGradient>
      </defs>
      <g id="kettlebell-loader">
        <path
          ref={kettlebellRef}
          id="kettlebell"
          d="M103.65 10.05c-16.56.29-36.41 4.47-47.82 17.64-19 21.89 1.36 53.79 1.36 53.79a64.19 64.19 0 1 0 92.81-.75c2.91-5.83 8-13.63 9.38-26.77 1.92-18.28-15.15-35.08-30.63-40.85-4.61-1.72-14-3.21-24.81-3"
          transform="translate(-34.78 -5.03)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          stroke="url(#loadingKettlebellGradient)"
        />
      </g>
      <path
        ref={handleRef}
        d="M76.32 37.84c15.05-12.84 47.35-8.93 56.61 2.75 5.82 7.33 5 18.77-1.38 25.73a64.24 64.24 0 0 0-55.89.56c-1.61-1.88-13.44-17 .66-29.04z"
        transform="translate(-34.78 -5.03)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
        stroke="url(#loadingKettlebellGradient2)"
        id="loading-kettlebell-handle"
      />
    </svg>
  )
}

export default LoadingKettlebell
