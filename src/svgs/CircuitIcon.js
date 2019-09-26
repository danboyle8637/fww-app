import React, { useEffect, useRef } from 'react'
import { TweenMax, Linear } from 'gsap/TweenMax'

const CircuitIcon = ({ width, height, className }) => {
  const needleRef = useRef(null)
  const fillRef = useRef('#8B53F6')

  useEffect(() => {
    const needle = needleRef.current

    TweenMax.to(needle, 10, {
      transformOrigin: '0% 100%',
      rotation: 360,
      ease: Linear.easeNone,
      repeat: -1
    })

    return () => {
      TweenMax.killTweensOf(needle)
    }
  }, [])

  return (
    <svg
      id="circuit-timer-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 152.14 177.97"
    >
      <circle
        cx="76.07"
        cy="101.9"
        r="66.56"
        fill="none"
        stroke={fillRef.current}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="19.02"
      />
      <circle cx="77.65" cy="59.11" r="6.34" fill={fillRef.current} />
      <circle cx="77.65" cy="146.28" r="6.34" fill={fillRef.current} />
      <circle cx="121.24" cy="102.7" r="6.34" fill={fillRef.current} />
      <circle cx="34.07" cy="102.7" r="6.34" fill={fillRef.current} />
      <circle cx="108.47" cy="71.88" r="6.34" fill={fillRef.current} />
      <circle cx="46.84" cy="133.51" r="6.34" fill={fillRef.current} />
      <circle cx="46.84" cy="71.88" r="6.34" fill={fillRef.current} />
      <circle cx="108.47" cy="133.51" r="6.34" fill={fillRef.current} />
      <circle cx="76.07" cy="101.9" r="6.34" fill={fillRef.current} />
      <path
        ref={needleRef}
        fill="none"
        stroke={fillRef.current}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="9.51"
        d="M76.07 101.9l20.01-19.48"
      />
      <path
        fill="none"
        stroke={fillRef.current}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="15.85"
        d="M77.58 35.36V7.92M63.88 7.92h27.39"
      />
    </svg>
  )
}

export default CircuitIcon
