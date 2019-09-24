import React, { useEffect, useRef } from 'react'
import { TweenMax } from 'gsap/TweenMax'
import DrawSVG from '../greensock/DrawSVGPlugin'

const LoadingKettlebell = ({ width, height, className, loading }) => {
  const loadingPathRef = useRef(null)
  // eslint-ignore-next-line
  const drawSVG = DrawSVG

  useEffect(() => {
    const loadingPath = loadingPathRef.current

    if (loading) {
      TweenMax.to(loadingPath, 0.4, {
        drawSVG: '0% 100%',
        repeat: -1
      })
    }

    return () => {
      TweenMax.killTweensOf(loadingPath)
    }
  }, [loading])

  return (
    <svg
      id="loading-kettlebell"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 136.39 187.6"
    >
      <defs>
        <linearGradient
          id="loadingKettlebellGradient"
          x1="33.08"
          y1="57.88"
          x2="174.57"
          y2="139.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".11" stopColor="#5afdf2" />
          <stop offset=".38" stopColor="#82aff8" />
          <stop offset=".73" stopColor="#b44cff" />
          <stop offset=".83" stopColor="#a44ffc" />
          <stop offset="1" stopColor="#8b53f6" />
        </linearGradient>
      </defs>
      <path
        ref={loadingPathRef}
        id="kettlebell"
        d="M150 80.73c2.91-5.83 8-13.63 9.38-26.77 1.92-18.28-15.15-35.08-30.63-40.85-11.69-4.35-54-7.29-72.95 14.59s1.36 53.79 1.36 53.79a64.19 64.19 0 1 0 92.84-.76zM76.12 38.88c15-12.84 47.35-8.93 56.61 2.76 5.82 7.32 5 18.76-1.38 25.72a64.22 64.22 0 0 0-55.88.56c-1.62-1.92-13.47-17 .65-29.04z"
        transform="translate(-35.78 -6.03)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        stroke="url(#loadingKettlebellGradient)"
      />
    </svg>
  )
}

export default LoadingKettlebell
