import React from 'react'

const NextWorkoutArrow = ({
  width,
  height,
  className,
  disablePrev,
  disableNext
}) => {
  return (
    <svg
      id="more-workouts-arrow"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 105.84 176.49"
    >
      <rect
        x="33.42"
        y="48.56"
        width="135.08"
        height="35.24"
        rx="17.62"
        transform="rotate(45 92.948 1.55)"
        fill={disablePrev ? '#787878' : disableNext ? '#787878' : '#5AFDF2'}
      />
      <rect
        x="33.43"
        y="119.21"
        width="135.08"
        height="35.24"
        rx="17.62"
        transform="rotate(-45 60.935 188.2)"
        fill={disablePrev ? '#787878' : disableNext ? '#787878' : '#5AFDF2'}
      />
    </svg>
  )
}

export default NextWorkoutArrow
