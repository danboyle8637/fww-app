import React from 'react'

const LogoutIcon = ({ width, height, className }) => {
  return (
    <svg
      id="logout-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 213 154"
    >
      <path
        id="site"
        d="M147 112.63A34.37 34.37 0 0 1 112.63 147H41.37A34.37 34.37 0 0 1 7 112.63V41.37A34.37 34.37 0 0 1 41.37 7h71.26A34.37 34.37 0 0 1 147 41.37"
        fill="none"
        stroke="#f8f8f8"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="14"
      />
      <path
        id="arrow"
        d="M177.14 93.54v15.13h-26a12.74 12.74 0 0 0-12.74 12.75 12.74 12.74 0 0 0 12.74 12.74h26v15.14a1.28 1.28 0 0 0 1.92 1.11l48.3-27.88a1.29 1.29 0 0 0 0-2.22l-48.3-27.88a1.28 1.28 0 0 0-1.92 1.11z"
        transform="translate(-15 -44.42)"
        fill="#f8f8f8"
      />
    </svg>
  )
}

export default LogoutIcon
