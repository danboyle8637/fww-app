import React, { useRef, useEffect } from 'react'
import { TweenMax } from 'gsap/TweenMax'
import DrawSVG from '../greensock/DrawSVGPlugin'

const ProgressLoader = ({
  width,
  height,
  className,
  gradientId,
  workoutsCompleted,
  setPercentComplete,
  percentage
}) => {
  const loaderRef = useRef(null)
  // eslint-disable-next-line
  const drawSVG = DrawSVG

  useEffect(() => {
    // TODO We need to make sure this only runs when the percent has changed.
    // It's kicking off a state change everytime currently.
    const loader = loaderRef.current

    const maxLength = DrawSVG.getLength(loader)

    const programPercent = (((percentage / 100) * maxLength) / maxLength) * 100

    // const programPercent =
    //   (((workoutsCompleted / totalWorkouts) * maxLength) / maxLength) * 100

    TweenMax.set(loader, { drawSVG: '0%' })

    TweenMax.to(loader, 2, {
      drawSVG: `${programPercent}%`,
      onUpdate: function() {
        const position = DrawSVG.getPosition(loader)[1]
        const percent = Math.round((position / maxLength) * 100)
        setPercentComplete(percent)
      }
    })

    return () => {
      TweenMax.killTweensOf(loader)
    }
  }, [drawSVG, setPercentComplete, workoutsCompleted, percentage])

  return (
    <svg
      id="progress-loader"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 171 171"
    >
      <title>Progress Loader</title>
      <defs>
        <linearGradient
          id={`progressLoaderGradient${gradientId}`}
          x1="17"
          y1="99.5"
          x2="182"
          y2="99.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b44cff" />
          <stop offset=".45" stopColor="#88a2f9" />
          <stop offset=".83" stopColor="#67e4f4" />
          <stop offset="1" stopColor="#5afdf2" />
        </linearGradient>
      </defs>
      <circle
        id="progress-background"
        cx="85.5"
        cy="85.5"
        r="69.5"
        fill="none"
        stroke="#0e0e0f"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="32"
      />
      <path
        ref={loaderRef}
        id="progress"
        d="M100.08 30a69.47 69.47 0 1 1-1.23 0"
        transform="translate(-14 -14)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="26"
        stroke={`url(#progressLoaderGradient${gradientId})`}
      />
    </svg>
  )
}

export default ProgressLoader
