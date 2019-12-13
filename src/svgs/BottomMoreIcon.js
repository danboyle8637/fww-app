import React, { useEffect, useRef } from 'react'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const BottomMoreIcon = ({ width, height, className, isOpen }) => {
  const moreIconRef = useRef(null)

  useEffect(() => {
    const moreIcon = moreIconRef.current

    if (isOpen) {
      TweenMax.to(moreIcon, 0.4, {
        transformOrigin: '50% 50%',
        rotation: 90,
        ease: Power2.easeOut
      })
    } else {
      TweenMax.to(moreIcon, 0.4, {
        transformOrigin: '50% 50%',
        rotation: 0,
        ease: Power2.easeOut
      })
    }
  }, [isOpen])

  return (
    <svg
      ref={moreIconRef}
      id="more-dots-icon"
      data-name="more-dots-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 63.82 217"
    >
      <g id="dots">
        <path
          d="M127.36 182.94a19.15 19.15 0 11-19.15 19.15 19.17 19.17 0 0119.15-19.15m0-12.76a31.91 31.91 0 1031.91 31.91 31.9 31.9 0 00-31.91-31.91z"
          transform="translate(-95.45 -17)"
          fill="#8188d5"
          id="left-dot"
        />
        <path
          d="M127.36 106.35a19.15 19.15 0 11-19.15 19.15 19.17 19.17 0 0119.15-19.15m0-12.76a31.91 31.91 0 1031.91 31.91 31.91 31.91 0 00-31.91-31.91z"
          transform="translate(-95.45 -17)"
          fill="#adb2ef"
          id="middle-dot"
        />
        <path
          d="M127.36 29.76a19.15 19.15 0 11-19.15 19.15 19.17 19.17 0 0119.15-19.15m0-12.76a31.91 31.91 0 1031.91 31.91A31.91 31.91 0 00127.36 17z"
          transform="translate(-95.45 -17)"
          fill="#d7daff"
          id="right-dot"
        />
      </g>
    </svg>
  )
}

export default BottomMoreIcon
