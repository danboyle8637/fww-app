import React from 'react'

const NavigationArrow = ({ width, height, className }) => {
  return (
    <svg
      id="navigation-arrow"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 132.74 221.35"
    >
      <title>Navigation Arrow Icon</title>
      <defs>
        <linearGradient
          id="navigationGradient"
          x1="134.37"
          y1="182.74"
          x2="134.37"
          y2="50"
          gradientTransform="rotate(90 125.37 116.37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8b53f6" />
          <stop offset=".72" stopColor="#5afdf2" />
        </linearGradient>
      </defs>
      <path
        id="arrow"
        d="M96.73 229.57L185.27 141a22.17 22.17 0 0 0 0-31.32L96.72 21.16a22.1 22.1 0 0 0-31.25 31.25l73 73-72.99 72.91a22.1 22.1 0 0 0 0 31.25 22.1 22.1 0 0 0 31.25 0z"
        transform="translate(-59 -14.69)"
        fill="url(#navigationGradient)"
      />
    </svg>
  )
}

export default NavigationArrow
