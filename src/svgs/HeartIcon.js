import React from 'react'

const HeartIcon = ({ width, height, className }) => {
  return (
    <svg
      id="favorite-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 212.67 186.65"
    >
      <title>Heart Icon</title>
      <path
        id="favorite-heart"
        d="M190 24.1l-1.43-1.45a50.12 50.12 0 0 0-70.89 0l-11.34 11.38L95 22.65a50.12 50.12 0 0 0-70.9 0l-1.42 1.41a50.15 50.15 0 0 0 0 70.9l83.66 83.69L190 95a50.13 50.13 0 0 0 0-70.9z"
        fill="#101010"
        stroke="#E14075"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="22"
      />
    </svg>
  )
}

export default HeartIcon
