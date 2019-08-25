import React, { useEffect, useRef } from 'react'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const DownloadIcon = ({ width, height, className }) => {
  const arrowRef = useRef(null)

  useEffect(() => {
    const arrow = arrowRef.current

    TweenMax.to(arrow, 1, {
      y: -8,
      ease: Power2.easeInOut,
      yoyo: true,
      repeat: -1
    })

    return () => {
      TweenMax.killTweensOf(arrow)
    }
  }, [])

  return (
    <svg
      id="download-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 261.26 240"
    >
      <title>Download Training Plan Icon</title>
      <defs>
        <linearGradient
          id="downloadIconGradient"
          x1="117.53"
          y1="23.57"
          x2="174.78"
          y2="199.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
      </defs>
      <g id="cloud">
        <path
          d="M231.85 78.76h-.33a35.43 35.43 0 0 0-55.79-23.95 49.93 49.93 0 0 0-96.66 16.43 52.99 52.99 0 0 0-4.74-.22 53.81 53.81 0 0 0 0 107.61h51.35v-23.91a25.48 25.48 0 0 1 25.48-25.48 25.47 25.47 0 0 1 25.47 25.48v23.91h55.22a49.94 49.94 0 1 0 0-99.87z"
          transform="translate(-20.53 -22.43)"
          fill="#101010"
        />
        <path
          d="M129 34.43A38.11 38.11 0 0 1 164.5 59l5.5 14.73 12.74-9.17a23.42 23.42 0 0 1 36.88 15.83l1.42 10.45 10.55-.07h.4a37.94 37.94 0 0 1-.15 75.87h-43.21v-11.92a37.48 37.48 0 1 0-74.95 0v11.91H74.21A41.81 41.81 0 0 1 74.33 83c1.14 0 2.35.06 3.7.17l12.75 1.12.29-12.81A37.93 37.93 0 0 1 129 34.43m0-12a49.93 49.93 0 0 0-49.93 48.81 52.99 52.99 0 0 0-4.74-.22 53.81 53.81 0 0 0 0 107.61h51.35v-23.91a25.48 25.48 0 0 1 25.48-25.48 25.47 25.47 0 0 1 25.47 25.48v23.91h55.22a49.94 49.94 0 1 0 0-99.87h-.33a35.43 35.43 0 0 0-55.79-23.95A49.94 49.94 0 0 0 129 22.43z"
          transform="translate(-20.53 -22.43)"
          fill="url(#downloadIconGradient)"
        />
      </g>
      <path
        ref={arrowRef}
        id="arrow"
        d="M184 185.91h-17.84v-30.59a15 15 0 0 0-15-15 15 15 0 0 0-15 15v30.59h-17.82a1.51 1.51 0 0 0-1.31 2.26L149.85 245a1.5 1.5 0 0 0 2.61 0l32.82-56.84a1.5 1.5 0 0 0-1.28-2.25z"
        transform="translate(-20.53 -22.43)"
        fill="#B44CFF"
      />
    </svg>
  )
}

export default DownloadIcon
